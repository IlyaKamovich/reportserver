import { IAddTargetologDto, ITargetologQuery, ITargetolog } from "../interfaces/targetolog.interface";
import { Targetolog } from "../models/tagretolog.model";

export const createNewTagetolog = async (targetologData: IAddTargetologDto): Promise<ITargetolog> => {
  const newTargetolog = await Targetolog.create<IAddTargetologDto>(targetologData);
  return newTargetolog;
};

export const getTargetologsByFilter = async (query: ITargetologQuery): Promise<Array<ITargetolog>> => {
  const targetologs = await Targetolog.find(query).lean();
  return targetologs;
};
