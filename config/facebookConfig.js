const path = require('./path')
module.exports={
    clientID: '3504788039647076',
    clientSecret: '3e4dbae11f3e0279b87e02b63a5eb2ad',
    callbackURL: `${path}/auth/facebook/callback`,
    profileFields: ['id', 'displayName', 'picture.height(500)', 'email']
  }