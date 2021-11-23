import { QueryHelper } from "../helpers/query.helper.js";
import { Report } from "../models/report.model.js";

export const createNewReport = async (reqParams) => {
  try {
    const { date, targetologId, metrics } = reqParams;

    const newReport = await Report.create({
      date: date,
      targetologId: targetologId,
      metrics: {
        conversions: metrics.conversions,
        cpi: metrics.cpi,
      },
    });

    return newReport;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getReportsByFilter = async (queryParams, targetologs) => {
  try {
    const query = QueryHelper.formatFilter(queryParams, targetologs);
    const reports = await Report.find(query).lean();

    return reports;
  } catch (e) {
    throw new Error(e.message);
  }
};
