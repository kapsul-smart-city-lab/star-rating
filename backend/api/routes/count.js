const CountController = require("../controllers/count")
const { routeErrorHandler } = require("../middlewares")


class Count {
    @routeErrorHandler
    static async get(req, res, next) {
        var counts = await CountController.getCount()
        res.json(counts)
    }
}

module.exports = {
    Count
}