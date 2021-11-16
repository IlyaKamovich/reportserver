import { Report } from "../models/reports.js";
import { getTargetologsBySource } from "./targetologController.js";

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

const getReportsBetweenDatesByTargetologIds = async (targetologs, startWith, endOn) => {
  const targetologIds = targetologs.map((targetolog) => targetolog._id);

  try {
    return await Report.find({
      targetologId: { $in: targetologIds },
      date: {
        $gte: startWith,
        $lte: endOn,
      },
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

const getReports = async (req, res, next) => {
  const { source, startWith, endOn } = req.query;

  console.log(req);

  try {
    const targetologs = await getTargetologsBySource(source);
    const reportsBetweenDatesByTargetologIds = await getReportsBetweenDatesByTargetologIds(targetologs, startWith, endOn);
    res.status(200).json({ reports: reportsBetweenDatesByTargetologIds });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export { createReport, getReports };
