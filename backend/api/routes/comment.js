const CommentController = require("../controllers/comment")
const { routeErrorHandler } = require("../middlewares")


class Comment {
    @routeErrorHandler
    static async get(req, res, next) {
        var comments = await CommentController.getComments()
        res.json(comments)
    }

    @routeErrorHandler
    static async post(req, res, next) {
        var comment = await CommentController.createComment(req.body)
        res.json(comment)
    }
}

module.exports = {
    Comment
}