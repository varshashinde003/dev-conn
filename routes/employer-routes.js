import express from "express";
const router = express.Router();
import _Admin from "../models/admin";
import _AdminPasswordReset from "../models/admin-password-reset";
import AuthMiddleware from "../middlewares/auth-middleware";
import AuthController from "../controllers/auth-controller";

const adminAuth = new AuthController("Admin");
const authMiddleware = new AuthMiddleware("Admin");

router.post("/web-login", adminAuth.webLogin);
router.post("/api-login", adminAuth.apiLogin);
router.post("/logout", adminAuth.logout);
router.get("/profile", [authMiddleware.webAuth], adminAuth.getProfile);

router.post("/change-password", [authMiddleware.webAuth], adminAuth.changePassword);
router.post("/forget-password", adminAuth.sendForgetPasswordMail);
router.post("/reset-password", adminAuth.resetPassword);

export default router;