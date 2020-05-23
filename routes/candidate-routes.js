import express from "express";
const router = express.Router();
import _Candidate from "../models/candidate";
import _CandidatePasswordReset from "../models/candidate-password-reset";
import _EmailVerification from "../models/email-verification";
import AuthMiddleware from "../middlewares/auth-middleware";
// import activeAccountMiddleware from "../middlewares/active-account-middleware";
import AuthController from "../controllers/auth-controller";
import { createCandidate, updateProfile, getProfile, addEducation, addExperience, deleteEducation, deleteExperience, updateEducation, updateExperience, updateSkills } from "../controllers/candidate-controller";
import VerificationController from "../controllers/verification-controller";

const candidateAuth = new AuthController("Candidate");
const authMiddleware = new AuthMiddleware("Candidate");
const emailVerification = new VerificationController("Candidate");

router.post("/signup", createCandidate);
router.post("/api-login", candidateAuth.apiLogin);
router.post("/forget-password", candidateAuth.sendForgetPasswordMail);
router.post("/reset-password", candidateAuth.resetPassword);
router.get("/verify-email/:token", emailVerification.verifyEmail);

router.use(authMiddleware.apiAuth);
router.get("/profile", getProfile);
router.post("/update-profile", updateProfile);
router.post("/add-education", addEducation);
router.post("/delete-education/:id", deleteEducation);
router.post("/update-education/:id", updateEducation);
router.post("/add-experience", addExperience);
router.post("/update-experience/:id", updateExperience);
router.post("/delete-experience/:id", deleteExperience);
router.post("/update-skills", updateSkills);
router.post("/logout", candidateAuth.logout);
router.post("/change-password", candidateAuth.changePassword);

// router.use(activeAccountMiddleware('Candidate'));

export default router;