const express = require("express");

let router = express.Router();
const passport = require("passport");
//===============GITHUB LOGIN WITH PASSPORT=================
router.get("/github", passport.authenticate("github"));

router.get(
    "/github/callback",
    passport.authenticate("github", {
        successRedirect: "/home",
        failureRedirect: "/failed",
        //session: false
    })
);
//==========================================================

//===============TWITTER LOGIN WITH PASSPORT=================
router.get("/twitter", passport.authenticate("twitter"));

router.get(
    "/twitter/callback",
    passport.authenticate("twitter", {
        successRedirect: "/home",
        failureRedirect: "/failed",
        //session: false
    })
);
//==========================================================

//===============GOOGLE LOGIN WITH PASSPORT=================
router.get(
    "/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: "/home",
        failureRedirect: "/failed",
        //session: false
    })
);
//==========================================================

//==============FACEBOOK LOGIN WITH PASSPORT================
router.get(
    "/facebook",
    passport.authenticate("facebook", { authType: "reauthenticate" })
);

router.get(
    "/facebook/callback",
    passport.authenticate("facebook", {
        successRedirect: "/home",
        failureRedirect: "/failed",
        //session: false
    })
);
//==========================================================

router.get("/logout", function (req, res) {
    req.logOut();
    res.clearCookie("connect.sid", {
        path: "/",
    });
    req.session.destroy(function (err) {
        res.redirect("/");
    });
});

module.exports = router;
