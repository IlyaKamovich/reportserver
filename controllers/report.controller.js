import { ReportHelpers } from "../helpers/report.helper.js";
import { Report } from "../models/report.model.js";
import { getTargetologsData } from "./targetolog.controller.js";

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

const getReportsData = async (targetologIds, dateStartWith, dateEndOn) => {
  try {
    let reports;

    if (!targetologIds || !dateStartWith || !dateEndOn) {
      reports = await Report.find().lean();
      return reports;
    }

    reports = await Report.find({
      targetologId: { $in: targetologIds },
      date: {
        $gte: dateStartWith,
        $lte: dateEndOn,
      },
    }).lean();
    return reports;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getReports = async (req, res, next) => {
  const { source, startWith, endOn } = req.query;

  try {
    if (!source || !startWith || !endOn) {
      const targetologs = await getTargetologsData();
      const reports = await getReportsData();

      const currentReports = ReportHelpers.getReportsWithFormattedDateAndTargetologsNames(reports, targetologs);
      res.status(200).json({ reports: currentReports });
    }

    const targetologs = await getTargetologsData(source);
    const targetologIds = targetologs.map((targetolog) => targetolog._id);

    const reports = await getReportsData(targetologIds, startWith, endOn);
    const currentReports = ReportHelpers.getReportsWithFormattedDateAndTargetologsNames(reports, targetologs);
    res.status(200).json({ reports: currentReports });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export { createReport, getReports };
