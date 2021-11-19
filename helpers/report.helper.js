import moment from "moment";
import "moment/locale/ru.js";
moment.locale("ru");

class ReportHelpers {
  static getReportsWithFormattedDateAndTargetologsNames = (reports, targetologs) => {
    const result = reports.map((report) => {
      return {
        ...report,
        date: moment(report.date).format("L"),
        targetologName: targetologs.find((targetolog) => targetolog._id.toString() === report.targetologId.toString())?.name,
      };
    });

    return result;
  };
}

export { ReportHelpers };
