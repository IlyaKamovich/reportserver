import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TargetologReportsSchema = new Schema({
  targetolog: String,
  date: Date,
  metrics: {
    conversions: Number,
    cpi: Number,
  },
});

const TargetologReports = mongoose.model("TargetologReports", TargetologReportsSchema);

export { TargetologReports };
