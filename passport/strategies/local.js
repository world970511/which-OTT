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
  let loginFailed = false;

  if (!user) {
    done(null, {
      loginFailed: true,
    });
  } else {
    if (user.pwd !== hashPassword(password)) {
      loginFailed = true;
    }
    done(null, {
      user_id,
      name: user.name,
      loginFailed,
    });
  }
});

export default local;
