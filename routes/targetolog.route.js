import express from "express";
import { addNewTargetolog } from "../controllers/targetolog.controller.js";

const router = express.Router();

router.post("/targetolog", addNewTargetolog);

export default router;
