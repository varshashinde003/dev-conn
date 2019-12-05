import express from "express";
const router = express.Router();
import _Employer from "../models/employer";
import _EmployerPasswordReset from "../models/employer-password-reset";
import AuthMiddleware from "../middlewares/auth-middleware";
import activeAccountMiddleware from "../middlewares/active-account-middleware";
import AuthController from "../controllers/auth-controller";
import { createEmployer } from "../controllers/employer-controller";

const employerAuth = new AuthController("Employer");
const authMiddleware = new AuthMiddleware("Employer");

router.post("/signup", createEmployer);
router.post("/api-login", employerAuth.apiLogin);
router.post("/forget-password", employerAuth.sendForgetPasswordMail);
router.post("/reset-password", employerAuth.resetPassword);

router.use(authMiddleware.apiAuth);
router.post("/logout", employerAuth.logout);

router.use(activeAccountMiddleware('Employer'));

router.get("/profile", employerAuth.getProfile);
router.post("/change-password", employerAuth.changePassword);

export default router;