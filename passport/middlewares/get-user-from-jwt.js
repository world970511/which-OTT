import passport from 'passport';

export default (req, res, next) => {
  if (!req.cookies.token) {
    next();
    return;
  }
  return passport.authenticate('jwt', { session: false })(req, res, next);
};
