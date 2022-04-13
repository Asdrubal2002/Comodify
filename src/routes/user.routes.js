import { Router } from "express";
import { isLoggedIn } from "../lib/auth";
import { renderUserProfile,renderProfile } from "../controllers/user.controller";

const router = Router();

router.get("/profile", isLoggedIn, renderUserProfile);

router.get("/politics", renderProfile);


export default router;
