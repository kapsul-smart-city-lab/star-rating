const { Comment } = require('../../database');

class CommentController {
  // Create a new comment
  static async createComment(params) {
    const comment = await Comment.create(params);
    const { _id, __v, ...data } = comment.toObject();
    return { data: { comment: data } };
  }

  static async getComments() {
    const result = await Comment.find({}, {_id: 0, __v:0});
    return { data: result };
  }
}

module.exports = CommentController;