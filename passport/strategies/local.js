import passportLocal from 'passport-local';
import User from '../../models/User.js';
import hashPassword from '../../utils/hash-password.js';
const LocalStrategy = passportLocal.Strategy;

const config = {
  usernameField: 'user_id',
  passwordField: 'password',
  locationField: 'location',
};

const local = new LocalStrategy(config, async (user_id, password, done) => {
  const user = await User.findOne({ user_id });
  let userIdValidation = true;
  let userPwdValidation = true;
  if (!user) {
    userIdValidation = false;
  }

  if (user.pwd !== hashPassword(password)) {
    userPwdValidation = false;
  }
  done(null, {
    user_id,
    name: user.name,
    userIdValidation,
    userPwdValidation,
  });
});

export default local;
