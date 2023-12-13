const path = require("./path");
require("dotenv").config();
module.exports = {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: `${path}/auth/github/callback`,
};
