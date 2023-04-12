const express = require('express');
const { Comment } = require('./comment.js')
const { Count } = require('./count')

// set up router
const router = express.Router();

router.get('/comment', Comment.get)
router.post('/comment', Comment.post)

router.get('/count', Count.get)

module.exports = router;