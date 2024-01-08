module.exports = function authMiddleware(req, res, next) {
 if(!req.session.userLogued){
    return res.redirect("/login")
 }
 next();
}