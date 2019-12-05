import express from "express";
const router = express.Router();
import _Candidate from "../models/candidate";
import _CandidatePasswordReset from "../models/candidate-password-reset";
import AuthMiddleware from "../middlewares/auth-middleware";
import AuthController from "../controllers/auth-controller";
import { createCandidate } from "../controllers/candidate-controller";

const candidateAuth = new AuthController("Candidate");
const authMiddleware = new AuthMiddleware("Candidate");

router.post("/signup", createCandidate);
router.post("/api-login", candidateAuth.apiLogin);
router.post("/logout", candidateAuth.logout);
router.get("/profile", [authMiddleware.webAuth], candidateAuth.getProfile);

router.post("/change-password", [authMiddleware.webAuth], candidateAuth.changePassword);
router.post("/forget-password", candidateAuth.sendForgetPasswordMail);
router.post("/reset-password", candidateAuth.resetPassword);

export default router;