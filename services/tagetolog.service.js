import { Targetolog } from "../models/tagretolog.model.js";

export const createNewTagetolog = async (targetologData) => {
  try {
    const newTargetolog = await Targetolog.create(targetologData);
    return newTargetolog;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getTargetologsByFilter = async (query) => {
  try {
    const targetologs = await Targetolog.find(query).lean();
    return targetologs;
  } catch (e) {
    throw new Error(e.message);
  }
};
