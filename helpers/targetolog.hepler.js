class TargetologHelper {
  static filterTargetologQuery = (queryParams) => {
    let query = {};

    if (queryParams.source) {
      query = { ...query, source: queryParams.source };
    }

    return query;
  };
}

export { TargetologHelper };
