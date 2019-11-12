import express from "express";
const router = express.Router();
import { auth } from "../middlewares/auth-middleware";
import { doLogin, getProfile } from "../controllers/admin-auth-controller";

router.post("/login", doLogin);
router.get("/profile", [auth("Admin")], getProfile);

export default router;