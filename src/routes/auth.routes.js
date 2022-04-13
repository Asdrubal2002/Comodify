import { Router } from "express";
const router = Router();

import {
  renderSignUp,
  signUp,
  renderSignIn,
  signIn,
  renderChange,
  ChangePass,
  renderRecover,
  recoPass,
  renderPolitics,
  logout,
} from "../controllers/auth.controller";

// SIGNUP
router.get("/signup", renderSignUp);
router.post("/signup", signUp);

// SINGIN
router.get("/signin", renderSignIn);
router.post("/signin", signIn);

// CHANGE
router.get("/change", renderChange);
router.post("/change", ChangePass);

// CHANGE
router.get("/recover", renderRecover);
router.post("/recover", recoPass);


router.get("/logout", logout);

export default router;
