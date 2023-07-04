
function auth (req, res, next){
    console.log("Authenticating...");
    //Its importent to call next(); or you will not exit the middlware
    next();
}

module.exports = auth;