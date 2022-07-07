import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getTimelinePosts,
  likePost,
  updatePost,
} from "../Controllers/PostController.js";
import authMiddleWare from "../MiddleWare/authMiddleWare.js";


const router = express.Router();

router.post("/", authMiddleWare, createPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", authMiddleWare, deletePost);
router.put("/:id/like", likePost);
router.get('/:id/timeline', getTimelinePosts)
export default router;
