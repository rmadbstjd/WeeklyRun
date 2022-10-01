const express = require("express");
const router = express.Router();
const PostController = require("../controllers/posts.controller");
const postController = new PostController();
const authMiddleware = require("../middlewares/auth-middleware");
const upload = require("../modules/multer");
router.get(
  "/post/search/new/:pagenum",
  authMiddleware,
  postController.searchPost
);
router.get(
  "/post/search/popular/:pagenum",
  authMiddleware,
  postController.searchLikePost
);
router.get(
  "/post/popular/:pagenum",
  authMiddleware,
  postController.getLikeAllPosts
);
router.get(
  "/post/autocomplete",
  authMiddleware,
  postController.autoCompletePost
);
router.post(
  "/post",
  authMiddleware,
  upload.array("image", 10),
  postController.createPost
);
router.get("/post/new/:pagenum", authMiddleware, postController.getAllPosts);
router.get("/post/:postId", authMiddleware, postController.getImage);
router.put(
  "/post/:postId",
  authMiddleware,
  upload.array("image", 10),
  postController.updatePost
);
router.delete("/post/:postId", authMiddleware, postController.deletePost);

module.exports = router;
