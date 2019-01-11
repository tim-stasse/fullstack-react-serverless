import { verify } from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import { constant } from 'lodash/fp';
import { promisify } from 'util';
import { issuer } from '_constants';

const verifyAsync = promisify(verify);

export const verifyToken = token =>
  verifyAsync(
    token,
    ({ kid }, callback) =>
      jwksClient({
        jwksUri: `${issuer}/.well-known/jwks.json`
      }).getSigningKey(kid, (err, { publicKey, rsaPublicKey }) =>
        err ? callback(err) : callback(null, publicKey || rsaPublicKey)
      ),
    { issuer }
  ).catch(constant(null));
