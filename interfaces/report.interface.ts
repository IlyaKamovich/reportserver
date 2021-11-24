import mongoose from "mongoose";

export interface IReport {
  _id: mongoose.Types.ObjectId;
  date: Date;
  targetologId: mongoose.Types.ObjectId;
  metrics: {
    conversions: number;
    cpi: number;
  };
}

export type IAddReportDto = Omit<IReport, "_id">;

export interface IGetReportsDto {
  source?: string;
  startWith?: Date;
  endOn?: Date;
}

export interface IReportQuery {
  targetologId?: { $in: mongoose.Types.ObjectId[] };
  date?: {
    $gte?: Date;
    $lte?: Date;
  };
}
