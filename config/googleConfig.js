const path = require("./path");
require("dotenv").config();
module.exports = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${path}/auth/google/callback`,
    passReqToCallback: true,
};
