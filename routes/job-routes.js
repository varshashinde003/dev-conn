import express from "express";
const router = express.Router();
import _JobPost from "../models/job-post";
import AuthMiddleware from "../middlewares/auth-middleware";
import { addPost, getPostDetails, getAllPosts, editPost, deletePost } from "../controllers/job-post-controller";
const authMiddleware = new AuthMiddleware("Employer");

router.get("/all-posts", getAllPosts);
router.get("/post-details/:slug", getPostDetails);

router.use(authMiddleware.apiAuth);
router.post("/add-post", addPost);
router.post("/edit-post/:slug", editPost);
router.delete("/delete-post/:id", deletePost);

export default router;