import express from "express";
import { createTargetolog, getAllTargetologs } from "../controllers/targetolog.controller.js";

const router = express.Router();

router.post("/newTargetolog", createTargetolog);
router.get("/allTargetologs", getAllTargetologs);

export default router;
