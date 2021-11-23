import { QueryHelper } from "../helpers/query.helper.js";
import { Targetolog } from "../models/tagretolog.model.js";

export const createNewTagetolog = async (name, source) => {
  try {
    const newTargetolog = await Targetolog.create({
      name: name,
      source: source,
    });

    return newTargetolog;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getTargetologsByFilter = async (queryParams) => {
  try {
    const query = QueryHelper.formatFilter(queryParams);
    const targetologs = await Targetolog.find(query).lean();

    return targetologs;
  } catch (e) {
    throw new Error(e.message);
  }
};
