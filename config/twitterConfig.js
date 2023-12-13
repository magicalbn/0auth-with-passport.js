const path = require("./path");
require("dotenv").config();

module.exports = {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: `${path}/auth/twitter/callback`,
};
