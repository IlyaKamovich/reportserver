import express from "express";
import { createTargetolog } from "../controllers/targetolog.controller.js";

const router = express.Router();

router.post("/createTargetolog", createTargetolog);

export default router;
