module.exports = function guessMiddleware (req,res,next) {
    if(req.session.userLogued){
        return res.redirect("/index")
    }
    next()
}
