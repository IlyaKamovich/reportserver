import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
  date: Date,
  targetologId: { type: Schema.Types.ObjectId, ref: "targetolog" },
  metrics: {
    conversions: Number,
    cpi: Number,
  },
});

const Report = mongoose.model("reports", ReportSchema);

export { Report };
