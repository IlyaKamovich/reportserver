import _split from "lodash/split.js";
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
    const query = {};
    const date = {};

    if (targetologIds) query["targetologId"] = { $in: _split(targetologIds, ",") };
    if (dateStartWith) date["$gte"] = dateStartWith;
    if (dateEndOn) date["$lte"] = dateEndOn;
    if (date.$gte || date.$lte) query["date"] = { ...date };

    const reports = await Report.find(query).lean();
    return reports;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getReports = async (req, res, next) => {
  const { source, startWith, endOn } = req.query;

  const targetologs = await getTargetologsData(source);
  const targetologIds = targetologs.map((targetolog) => targetolog._id);

  const reports = await getReportsData(targetologIds, startWith, endOn);

  const reportsWithFormattedDate = ReportHelpers.formatDate(reports);
  const reportsWithMappedTargetologs = ReportHelpers.mapTargetologs(reportsWithFormattedDate, targetologs);

  res.status(200).json({ reports: reportsWithMappedTargetologs });
};

export { createReport, getReports };
