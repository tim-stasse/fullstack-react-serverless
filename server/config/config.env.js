const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const dotenvPath = path.resolve(appDirectory, '.env');

var dotenvFiles = [dotenvPath, `${dotenvPath}.local`].filter(Boolean);

dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv-expand')(
      require('dotenv').config({
        path: dotenvFile
      })
    );
  }
});

module.exports = process.env;
