const Comment = require('../models/Comment');
const Post = require('../models/Post');

const addComment = async (req, res) => {
  try {
    const { text, postId } = req.body;
    
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }
    
    const comment = await Comment.create({
      text,
      post: postId,
      user: req.user.id
    });
    
    const populatedComment = await Comment.findById(comment._id)
      .populate('user', 'name');
    
    res.status(201).json({
      success: true,
      data: populatedComment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId })
      .populate('user', 'name')
      .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: comments.length,
      data: comments
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    
    if (!comment) {
      return res.status(404).json({
        success: false,
        message: 'Comment not found'
      });
    }
    
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to delete this comment'
      });
    }
    
    await comment.deleteOne();
    
    res.json({
      success: true,
      message: 'Comment deleted successfully'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

module.exports = {
  addComment,
  getComments,
  deleteComment
};