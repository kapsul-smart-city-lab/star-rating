const  CommentController  = require('./comment');

function countRates(data) {
    const counts = {};
    data.forEach((item) => {
      const rate = item.rate;
      if (!counts[rate]) {
        counts[rate] = 1;
      } else {
        counts[rate]++;
      }
    });
    return counts;
}  

class CountController{
    static async getCount() {
        const comment = await CommentController.getComments()
        return countRates(comment.data)
    }
}


module.exports = CountController