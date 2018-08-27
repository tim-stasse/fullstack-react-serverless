const { readFile } = require('fs');
const fp = require('lodash/fp');
const readdirp = require('readdirp');
const swPrecache = require('sw-precache');
const util = require('util');

const readdirpAsync = util.promisify(readdirp);
const readFileAsync = util.promisify(readFile);

process.on('unhandledRejection', up => {
  throw up;
});

(async () => {
  const buildDir = 'build';
  const indexFile = 'index.html';
  const serviceWorkerPath = `./${buildDir}/service-worker.js`;

  const indexFilesResult = await readdirpAsync({
    root: `./${buildDir}`,
    fileFilter: indexFile
  });

  const staticFilesResult = await readdirpAsync({
    root: `./${buildDir}`,
    fileFilter: ['!*.map', '!asset-manifest.json']
  });

  await swPrecache.write(serviceWorkerPath, {
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    dynamicUrlToDependencies: fp.flow(
      fp.map(({ parentDir, path }) => [
        `/${parentDir}`,
        [`${buildDir}/${path}`]
      ]),
      fp.fromPairs
    )(indexFilesResult.files),
    navigateFallback: '200.html',
    logger(message) {
      if (message.indexOf('Total precache size is') === 0) {
        // This message occurs for every build and is a bit too noisy.
        return;
      }
      if (message.indexOf('Skipping static resource') === 0) {
        // This message obscures real errors so we ignore it.
        // https://github.com/facebook/create-react-app/issues/2612
        return;
      }
      console.log(message);
    },
    staticFileGlobs: fp.map(({ path }) => `${buildDir}/${path}`)(
      staticFilesResult.files
    ),
    stripPrefix: buildDir
  });

  var manifest = require(`../${buildDir}/asset-manifest`);
  var sw = (await readFileAsync(serviceWorkerPath)).toString();

  const missingFile = fp.flow(
    fp.keys,
    fp.filter(fp.negate(fp.endsWith('.map'))),
    fp.map(fp.get(fp, manifest)),
    fp.find(path => sw.indexOf(path) === -1)
  )(manifest);

  if (missingFile) {
    throw new Error(`Not cached: ${missingFile}`);
  }
})();
