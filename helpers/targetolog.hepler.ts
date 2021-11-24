import { IGetReportsDto } from "../interfaces/report.interface";
import { ITargetologQuery } from "../interfaces/targetolog.interface";

class TargetologHelper {
  static filterTargetologQuery = (queryParams: IGetReportsDto): ITargetologQuery => {
    let query = {};

    if (queryParams.source) {
      query = { ...query, source: queryParams.source };
    }

    return query;
  };
}

export { TargetologHelper };
