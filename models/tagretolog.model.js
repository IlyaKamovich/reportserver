import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TargetologSchema = new Schema({
  name: { type: String, required: true },
  source: { type: String, required: true },
});

export const Targetolog = mongoose.model("targetolog", TargetologSchema);
