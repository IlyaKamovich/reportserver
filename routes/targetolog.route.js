import express from "express";
import { createTargetolog, getAllTargetologs } from "../controllers/targetolog.controller.js";

const router = express.Router();

router.post("/createTargetolog", createTargetolog);
router.get("/getAllTargetologs", getAllTargetologs);

export default router;
