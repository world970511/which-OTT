import crypto from 'crypto';

const hashingPassword = password => {
  const cipher = crypto.createCipher('aes-256-cbc', '열쇠');
  let result = cipher.update(password, 'utf8', 'base64');
  result += cipher.final('base64');
  return result;
};

export default hashingPassword;
