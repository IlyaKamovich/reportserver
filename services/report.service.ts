import { IAddReportDto, IReport, IReportQuery } from "../interfaces/report.interface";
import { Report } from "../models/report.model";

export const createNewReport = async (reportData: IAddReportDto): Promise<IReport> => {
  const newReport = await Report.create<IAddReportDto>(reportData);
  return newReport;
};

export const getReportsByFilter = async (query: IReportQuery): Promise<Array<IReport>> => {
  const reports = await Report.find(query).lean();
  return reports;
};
