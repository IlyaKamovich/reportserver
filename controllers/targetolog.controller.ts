import { Request, Response } from "express";
import { IAddTargetologDto } from "../interfaces/targetolog.interface";
import { createNewTagetolog } from "../services/tagetolog.service";

const addNewTargetolog = async (req: Request, res: Response) => {
  try {
    const { name, source } = req.body;

    if (!name) res.status(400).json({ error: "Field name is required" });
    if (!source) res.status(400).json({ error: "Field source is required" });

    const newTargetolog = await createNewTagetolog(req.body as IAddTargetologDto);
    res.status(200).json({ newTargetolog });
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
};

export { addNewTargetolog };
