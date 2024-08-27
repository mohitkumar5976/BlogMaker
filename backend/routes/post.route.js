const express = require("express");
const { createPost, getAllPosts } = require("../controllers/post.controller");
const router = express.Router();

router.post("/post", createPost);
router.get("/posts", getAllPosts);

module.exports = { router };
