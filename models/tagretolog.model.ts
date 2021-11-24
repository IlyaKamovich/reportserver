import mongoose from "mongoose";
import { ITargetolog } from "../interfaces/targetolog.interface";

const TargetologSchema = new mongoose.Schema<ITargetolog>({
  name: { type: String, required: true },
  source: { type: String, required: true },
});

export const Targetolog = mongoose.model<ITargetolog>("targetolog", TargetologSchema);
