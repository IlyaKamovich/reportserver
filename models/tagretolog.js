import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TargetologSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  source: { type: String, required: true },
});

const Targetolog = mongoose.model("targetolog", TargetologSchema);

export { Targetolog };
