const path = require("./path");
require("dotenv").config();
module.exports = {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: `${path}/auth/facebook/callback`,
    profileFields: ["id", "displayName", "picture.height(500)", "email"],
};
