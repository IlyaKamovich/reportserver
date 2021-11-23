import { QueryHelper } from "../helpers/query.helper.js";
import { ReportHelpers } from "../helpers/report.helper.js";
import { Report } from "../models/report.model.js";
import { getTargetologs } from "./targetolog.controller.js";

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

const getReportsData = async (queryParams, targetologIds) => {
  try {
    const query = QueryHelper.formatFilter(queryParams, targetologIds);
    const reports = await Report.find(query).lean();

    return reports;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getReports = async (req, res, next) => {
  const targetologs = await getTargetologs(req.query);
  const targetologIds = targetologs.map((targetolog) => targetolog._id);

  const reports = await getReportsData(req.query, targetologIds);

  const reportsWithFormattedDate = ReportHelpers.formatDate(reports);
  const reportsWithMappedTargetologs = ReportHelpers.mapTargetologs(reportsWithFormattedDate, targetologs);

  res.status(200).json({ reports: reportsWithMappedTargetologs });
};

export { createReport, getReports };
