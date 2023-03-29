const { debug, routeErrorHandler } = require("./debug");
const notFound = require("./notFound");
const { successful } = require("./successful");

module.exports = {
    notFound,
    debug,
    successful,
    routeErrorHandler
}