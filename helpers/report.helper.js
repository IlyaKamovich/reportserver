import moment from "moment";
import "moment/locale/ru.js";
moment.locale("ru");
class ReportHelpers {
  static reportQueryFilter = (queryParams, targetologs) => {
    let query = {};

    if (targetologs) {
      const targetologIds = targetologs.map((targetolog) => targetolog._id);
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
