import express from "express";
import { addNewReport, getReports } from "../controllers/report.controller";

const router = express.Router();

router.post("/report", addNewReport);
router.get("/reports/sourse", getReports);

export default router;
