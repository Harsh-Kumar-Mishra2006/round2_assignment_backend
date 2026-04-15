const express = require('express');
const router = express.Router();
const { addComment, getComments, deleteComment } = require('../controllers/commentController');
const { protect } = require('../middleware/auth');

router.route('/')
  .post(protect, addComment);

router.route('/:postId')
  .get(getComments);

router.route('/:id')
  .delete(protect, deleteComment);

module.exports = router;