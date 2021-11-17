import express from "express";
import { createReport, getAllReports, getReportsByFilter } from "../controllers/report.controller.js";

const router = express.Router();

router.post("/createReport", createReport);
router.get("/getReports", getReportsByFilter);
router.get("/getAllReports", getAllReports);

export default router;
