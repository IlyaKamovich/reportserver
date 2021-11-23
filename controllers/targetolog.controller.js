import { createNewTagetolog } from "../services/tagetolog.service.js";

const addNewTargetolog = async (req, res, next) => {
  try {
    const { name, source } = req.body;

    if (!name) res.status(400).json({ error: "Field name is required" });
    if (!source) res.status(400).json({ error: "Field source is required" });

    const newTargetolog = await createNewTagetolog(name, source);

    res.status(200).json({ newTargetolog });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export { addNewTargetolog };
