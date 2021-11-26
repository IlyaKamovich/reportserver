import mongoose from "mongoose";

export interface ITargetolog {
  _id: mongoose.Types.ObjectId;
  name: string;
  source: string;
}

export type IAddTargetologDto = Omit<ITargetolog, "_id">;

export interface ITargetologQuery {
  source?: string;
}
