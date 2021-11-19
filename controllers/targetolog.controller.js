import { Targetolog } from "../models/tagretolog.model.js";

const createTargetolog = async (req, res, next) => {
  try {
    const { name, source } = req.body;

    if (!name) res.status(400).json({ error: "Field name is required" });
    if (!source) res.status(400).json({ error: "Field source is required" });

    const newTargetolog = await Targetolog.create({
      name: name,
      source: source,
    });

    res.status(200).json({ newTargetolog });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const getTargetologsData = async (source) => {
  try {
    let targetologs;

    if (source) {
      targetologs = await Targetolog.find({ source: source }).lean();
      return targetologs;
    }

    targetologs = await Targetolog.find().lean();
    return targetologs;
  } catch (e) {
    throw new Error(e.message);
  }
};

export { createTargetolog, getTargetologsData };
