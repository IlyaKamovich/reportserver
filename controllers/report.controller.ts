import { Request, Response } from "express";
import { ReportHelpers } from "../helpers/report.helper";
import { TargetologHelper } from "../helpers/targetolog.hepler";
import { getTargetologsByFilter } from "../services/tagetolog.service";
import { createNewReport, getReportsByFilter } from "../services/report.service";
import { IGetReportsDto, IAddReportDto } from "../interfaces/report.interface";

export const addNewReport = async (req: Request, res: Response) => {
  try {
    const newReport = await createNewReport(req.body as IAddReportDto);
    res.status(200).json({ newReport });
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
};

export const getReports = async (req: Request, res: Response) => {
  try {
    const targetologsQuery = TargetologHelper.filterTargetologQuery(req.query as IGetReportsDto);
    const targetologs = await getTargetologsByFilter(targetologsQuery);

    const reportsQuery = ReportHelpers.filterReportQuery(req.query as IGetReportsDto, targetologs);
    const reports = await getReportsByFilter(reportsQuery);

    const reportsWithFormattedDate = ReportHelpers.formatDate(reports);
    const reportsWithMappedTargetologs = ReportHelpers.mapTargetologs(reportsWithFormattedDate, targetologs);

    res.status(200).json({ reports: reportsWithMappedTargetologs });
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
};
