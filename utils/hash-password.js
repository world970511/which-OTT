import crypto from 'crypto';

const hashingPassword = password => {
  const hash = crypto.createHash('sha1');
  hash.update(pwd);
  return hash.digest('hex');
};

export default hashingPassword;
