import express from "express";
const router = express.Router();
import _Admin from "../models/admin";
import _AdminPasswordReset from "../models/admin-password-reset";
import { auth } from "../middlewares/auth-middleware";
import AuthController from "../controllers/auth-controller";

const adminAuth = new AuthController("Admin");

router.post("/login", adminAuth.login);
router.get("/profile", [auth("Admin")], adminAuth.getProfile);

router.post("/change-password", [auth("Admin")], adminAuth.changePassword);
router.post("/forget-password", adminAuth.sendForgetPasswordMail);
router.post("/reset-password", adminAuth.resetPassword);

export default router;