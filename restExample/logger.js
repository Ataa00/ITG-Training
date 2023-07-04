
function log (req, res, next){
    console.log("Logging...");
    //Its importent to call next(); or you will not exit the middlware
    next();
}

module.exports = log;