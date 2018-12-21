const getCertArn = serverless => {
  const domain = serverless.service.custom.topLevelDomain;

  const acm = new serverless.providers.aws.sdk.ACM({
    ...serverless.providers.aws.getCredentials(),
    region: 'us-east-1'
  });

  return acm
    .listCertificates()
    .promise()
    .catch(error => {
      throw Error(`Error: Failed to fetch certificates\n${error}`);
    })
    .then(({ CertificateSummaryList }) => {
      const fp = require('lodash/fp');
      const certArn = fp.flow(
        fp.find(
          fp.flow(
            fp.get('DomainName'),
            fp.includes(domain)
          )
        ),
        fp.get('CertificateArn')
      )(CertificateSummaryList);

      if (!certArn) {
        throw new Error(
          `Error: Failed to find certificate for domain '${domain}'`
        );
      }

      serverless.cli.consoleLog(`CertificateArn: ${certArn}`);

      return certArn;
    });
};

module.exports = serverless => {
  if (serverless.pluginManager.cliCommands[0] !== 'offline') {
    return getCertArn(serverless);
  }

  serverless.cli.consoleLog('offline: getCertArn did not run');

  return '';
};
