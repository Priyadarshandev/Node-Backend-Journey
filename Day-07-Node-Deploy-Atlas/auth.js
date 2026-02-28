const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const Person = require('../models/person');

passport.use(new BasicStrategy(
  async function(username, password, done) {
    try {

      const user = await Person.findOne({ username });

      if (!user) {
        return done(null, false);
      }

      const isMatch = await user.comparePassword(password);

      if (!isMatch) {
        return done(null, false);
      }

      // Remove password before attaching to req.user
      const userObject = user.toObject();
      delete userObject.password;

      return done(null, userObject);

    } catch (error) {
      return done(error);
    }
  }
));

module.exports = passport;