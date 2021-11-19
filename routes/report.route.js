import express from "express";
import { createReport, getReports } from "../controllers/report.controller.js";

const router = express.Router();

router.post("/report", createReport);
router.get("/reports/sourse", getReports);

export default router;
