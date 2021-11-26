import { IReport, IGetReportsDto, IReportQuery } from "../interfaces/report.interface";
import { ITargetolog } from "../interfaces/targetolog.interface";
import moment from "moment";
import "moment/locale/ru.js";

moment.locale("ru");

class ReportHelpers {
  static filterReportQuery = (queryParams: IGetReportsDto, targetologs: Array<ITargetolog>): IReportQuery => {
    let query: IReportQuery = {};

    if (targetologs) {
      const targetologIds = targetologs.map((targetolog: ITargetolog) => targetolog._id);
      query = { ...query, targetologId: { $in: targetologIds } };
    }

    if (queryParams.startWith) {
      query = { ...query, date: { $gte: queryParams.startWith } };
    }

    if (queryParams.endOn) {
      query = { ...query, date: { ...query.date, $lte: queryParams.endOn } };
    }

    return query;
  };

  static formatDate = (reports: Array<IReport>): Array<IReport & { formattedDate: string }> => {
    const result = reports.map((report) => {
      return {
        ...report,
        formattedDate: moment(report.date).format("L"),
      };
    });

    return result;
  };

  static mapTargetologs = (reports: Array<IReport>, targetologs: Array<ITargetolog>): Array<IReport & { targetologName?: string }> => {
    const result = reports.map((report: IReport) => {
      return {
        ...report,
        targetologName: targetologs.find((targetolog: ITargetolog) => targetolog._id.toString() === report.targetologId.toString())?.name,
      };
    });

    return result;
  };
}

export { ReportHelpers };
