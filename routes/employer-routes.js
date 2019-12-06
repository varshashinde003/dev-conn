import express from "express";
const router = express.Router();
import _Employer from "../models/employer";
import _EmployerPasswordReset from "../models/employer-password-reset";
import AuthMiddleware from "../middlewares/auth-middleware";
import activeAccountMiddleware from "../middlewares/active-account-middleware";
import AuthController from "../controllers/auth-controller";
import { createEmployer } from "../controllers/employer-controller";
import VerificationController from "../controllers/verification-controller";

const employerAuth = new AuthController("Employer");
const authMiddleware = new AuthMiddleware("Employer");
const emailVerification = new VerificationController("Employer");

router.post("/signup", createEmployer);
router.post("/api-login", employerAuth.apiLogin);
router.post("/forget-password", employerAuth.sendForgetPasswordMail);
router.post("/reset-password", employerAuth.resetPassword);
router.post("/verify-email/:token", emailVerification.verifyEmail);

router.use(authMiddleware.apiAuth);
router.get("/profile", employerAuth.getProfile);
router.post("/logout", employerAuth.logout);
router.post("/change-password", employerAuth.changePassword);

router.use(activeAccountMiddleware('Employer'));

export default router;