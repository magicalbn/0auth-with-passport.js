const next = require('next')
const express = require('express')
const { json, response } = require('express');
//===============PASSPORT FILES=================
const session = require('express-session')
const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
//==============================================



const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handler = app.getRequestHandler();

//router
const authRouter = require('./router/authRouter')
const checkRouter = require('./router/checkRouter')




app.prepare().then(() => {
    const server = express()

    server.use(express.json())


    server.use(session({
        secret: 'Login Session',
        resave: false,
        saveUninitialized: false,
        // cookie: { secure: true }
    }))
    server.use(passport.initialize());
    server.use(passport.session());



    //=================GITHUB PASSPORT CONFIG================
    const GithubConfig = require('./config/githubConfig')
    passport.use(new GitHubStrategy(GithubConfig,
        function (accessToken, refreshToken, profile, cb) {
            return cb(null, profile);
        }
    ));
    //=======================================================
    //================TWITTER PASSPORT CONFIG================
    const TwitterConfig = require('./config/twitterConfig')
    passport.use(new TwitterStrategy(TwitterConfig,
        function (token, tokenSecret, profile, cb) {
            return cb(null, profile)
        }
    ));
    //========================================================
    //=================GOOGLE PASSPORT CONFIG=================
    const GoogleConfig = require('./config/googleConfig')
    passport.use(new GoogleStrategy(GoogleConfig,
        function (request, accessToken, refreshToken, profile, done) {
            return done(null, profile)
        }
    ));
    //========================================================
    //===============FACEBOOK PASSPORT CONFIG=================
    const FacebookConfig = require('./config/facebookConfig')
    passport.use(new FacebookStrategy(FacebookConfig,
        function (accessToken, refreshToken, profile, cb) {
            return cb(null, profile)
        }
    ));
    //==========================================================


    passport.serializeUser((user, cb) => {
        cb(null, user)
    })

    passport.deserializeUser((user, cb) => {
        cb(null, user)
    })



    //use router for /Auth
    server.use('/auth', authRouter)
    server.use('/check', checkRouter)




    server.get('/home', (req, res, next) => {
        next()
    })

    server.get('/json', (req, res) => {
        res.json({
            user: req.user,

        })
    })

    //==========================================================================


    server.get("*", (req, res) => {
        return handler(req, res)
    })
    server.listen(port, err => {
        if (err) throw err;
        console.log(`Listening on PORT ${port} => http://localhost:${port}`);
    });
})