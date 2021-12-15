import passportLocal from 'passport-local';
import User from '../../models/User.js';
import hashPassword from '../../utils/hash-password.js';
const LocalStrategy = passportLocal.Strategy;

const config = {
  usernameField: 'user_id',
  passwordField: 'password',
};

const local = new LocalStrategy(config, async (user_id, password, done) => {
  try {
    console.log(user_id, password);
    const user = await User.findOne({ user_id });
    console.log(user);
    if (!user) {
      throw new Error('회원을 찾을 수 없습니다.');
    }
    if (user.pwd !== hashPassword(password)) {
      throw new Error('비밀번호가 일치하지 않습니다.');
    }

    done(null, {
      user_id,
      name: user.name,
    });
  } catch (err) {
    done(err, null);
  }
});

export default local;