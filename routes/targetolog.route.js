import express from "express";
<<<<<<< HEAD
import { addNewTargetolog } from "../controllers/targetolog.controller.js";

const router = express.Router();

router.post("/targetolog", addNewTargetolog);
=======
import { createTargetolog } from "../controllers/targetolog.controller.js";

const router = express.Router();

router.post("/createTargetolog", createTargetolog);
>>>>>>> 1d586dc (Added routes folder, fixed filenames and controllers)

export default router;
