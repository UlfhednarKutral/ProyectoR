module.exports = {
    ensureAuth: function (req, res, next) {
        if (req.isAuthenticated()) {
            console.log('is');
            return next();
        } else {
            res.redirect('/');
        }
    },
    ensureGuest: function (req, res, next) {
        if (req.isAuthenticated()) {
            console.log('not');
            res.redirect('/panel');
        } else {
            console.log('not');
            return next();
        }
    },
    ensureAdmin: function (req, res, next) {
        if (!req.user.administra) {
            console.log(req.user.administra);
            res.redirect('/');
        } else {
            console.log('Welcome mr. Admin');
            return next();
        }
    },
};
