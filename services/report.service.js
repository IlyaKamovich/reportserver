import { Report } from "../models/report.model.js";

export const createNewReport = async (reportData) => {
  try {
    const newReport = await Report.create(reportData);
    return newReport;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getReportsByFilter = async (query) => {
  try {
    const reports = await Report.find(query).lean();
    return reports;
  } catch (e) {
    throw new Error(e.message);
  }
};
