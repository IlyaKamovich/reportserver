import moment from "moment";
import "moment/locale/ru.js";
moment.locale("ru");

class ReportHelpers {
  static formatDate = (reports) => {
    const result = reports.map((report) => {
      return {
        ...report,
        date: moment(report.date).format("L"),
      };
    });

    return result;
  };

  static mapTargetologs = (reports, targetologs) => {
    const result = reports.map((report) => {
      return {
        ...report,
        targetologName: targetologs.find((targetolog) => targetolog._id.toString() === report.targetologId.toString())?.name,
      };
    });

    return result;
  };
}

export { ReportHelpers };
