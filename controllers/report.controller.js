import { Report } from "../models/report.model.js";
import { getTargetologsBySource } from "./targetolog.controller.js";

const createReport = async (req, res, next) => {
  try {
    const { date, targetologId, metrics } = req.body;

    const newReport = await Report.create({
      date: date,
      targetologId: targetologId,
      metrics: {
        conversions: metrics.conversions,
        cpi: metrics.cpi,
      },
    });

    res.status(200).json({ newReport });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const getAllReports = async (req, res, next) => {
  try {
    const reports = await Report.find();
    res.status(200).json({ reports });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const getReportsByFilter = async (req, res, next) => {
  const { source, startWith, endOn } = req.query;

  try {
    const targetologs = await getTargetologsBySource(source);
    const targetologIds = targetologs.map((targetolog) => targetolog._id);

    const reports = await Report.find({
      targetologId: { $in: targetologIds },
      date: {
        $gte: startWith,
        $lte: endOn,
      },
    });

    res.status(200).json({ reports });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export { createReport, getReportsByFilter, getAllReports };
