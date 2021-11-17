import express from "express";
import { createReport, getReports } from "../controllers/report.controller.js";

const router = express.Router();

router.post("/createReport", createReport);
router.get("/getReports", getReports);

export default router;
