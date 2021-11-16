import mongoose from "mongoose";
import { Targetolog } from "../models/tagretolog.js";

const createTargetolog = async (req, res, next) => {
  try {
    const { name, source } = req.body;

    if (!name) res.status(400).json({ error: "Field name is required" });
    if (!source) res.status(400).json({ error: "Field source is required" });

    const newTargetolog = await Targetolog.create({
      _id: new mongoose.Types.ObjectId(),
      name: name,
      source: source,
    });

    res.status(200).json({ newTargetolog });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const getTargetologsBySource = async (source) => {
  try {
    return await Targetolog.find({ source: source });
  } catch (e) {
    throw new Error(e.message);
  }
};

export { createTargetolog, getTargetologsBySource };
