const logger = (req, res, next) => {
    //console.log(`${new Date().toISOString()} - ${req.method} request received for ${req.originalUrl}`);
    next();
};

module.exports = logger