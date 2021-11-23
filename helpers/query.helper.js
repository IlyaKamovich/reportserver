import _split from "lodash/split.js";

class QueryHelper {
  static formatFilter = (queryParams, targetologIds) => {
    let query = {};

    if (queryParams.source) {
      query = { ...query, source: queryParams.source };
    }

    if (targetologIds) {
      query = { ...query, targetologId: { $in: _split(targetologIds, ",") } };
    }

    if (queryParams.startWith) {
      query = { ...query, date: { $gte: queryParams.startWith } };
    }

    if (queryParams.endOn) {
      query = { ...query, date: { ...query.date, $lte: queryParams.endOn } };
    }

    return query;
  };
}

export { QueryHelper };
