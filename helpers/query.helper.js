class QueryHelper {
  static formatFilter = (queryParams, targetologs) => {
    let query = {};

    if (queryParams.source) {
      query = { ...query, source: queryParams.source };
    }

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
}

export { QueryHelper };
