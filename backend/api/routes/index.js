const express = require('express');
const { Comment } = require('./comment.js')
// set up router
const router = express.Router();

router.get('/comment', Comment.get)
router.post('/comment', Comment.post)

module.exports = router;