import mongoose from "mongoose";
import { IReport } from "../interfaces/report.interface";

const ReportSchema = new mongoose.Schema<IReport>({
  date: Date,
  targetologId: { type: mongoose.Schema.Types.ObjectId, ref: "targetolog" },
  metrics: {
    conversions: Number,
    cpi: Number,
  },
});

export const Report = mongoose.model<IReport>("reports", ReportSchema);
