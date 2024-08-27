const PostModel = require('../models/post.model');

// Get all blog posts
exports.getAllPosts = async (req, res) => {
  try {
    const blogs = await PostModel.find().populate('author', 'username');
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new blog post
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    // Create and save the new blog post
    const blog = new PostModel({ title, content, author: req.userId });
    await blog.save();

    res.status(201).json({ message: 'Blog post created successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
