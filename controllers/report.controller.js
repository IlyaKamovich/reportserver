import { ReportHelpers } from "../helpers/report.helper.js";
import { getTargetologsByFilter } from "../services/tagetolog.service.js";
import { createNewReport, getReportsByFilter } from "../services/report.service.js";

export const addNewReport = async (req, res, next) => {
  try {
    const newReport = await createNewReport(req.body);

    res.status(200).json({ newReport });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const getReports = async (req, res, next) => {
  try {
    const targetologs = await getTargetologsByFilter(req.query);
    const reports = await getReportsByFilter(req.query, targetologs);

    const reportsWithFormattedDate = ReportHelpers.formatDate(reports);
    const reportsWithMappedTargetologs = ReportHelpers.mapTargetologs(reportsWithFormattedDate, targetologs);

    res.status(200).json({ reports: reportsWithMappedTargetologs });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
