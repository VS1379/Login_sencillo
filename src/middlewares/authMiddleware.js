const session = require("express-session");
module.exports = auth = {
    if (req.session.email) {
        console.log("ESTA LOGUEADO");
        return res.redirect("/index");
    }
    console.log("NO ESTA LOGUEADO");
}
