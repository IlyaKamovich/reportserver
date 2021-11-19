import express from "express";
import { createTargetolog } from "../controllers/targetolog.controller.js";

const router = express.Router();

router.post("/targetolog", createTargetolog);

export default router;
