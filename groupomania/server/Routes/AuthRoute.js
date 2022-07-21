import express from "express";
import { loginUser, registerUser } from "../Controllers/AuthController.js";
import limiter from "../MiddleWare/login.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", limiter, loginUser);

export default router;
