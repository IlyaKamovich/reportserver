import express from "express";
<<<<<<< HEAD
import { addNewReport, getReports } from "../controllers/report.controller.js";

const router = express.Router();

router.post("/report", addNewReport);
router.get("/reports/sourse", getReports);
=======
import { createReport, getReports } from "../controllers/report.controller.js";

const router = express.Router();

router.post("/createReport", createReport);
router.get("/getReports", getReports);
>>>>>>> 1d586dc (Added routes folder, fixed filenames and controllers)

export default router;
