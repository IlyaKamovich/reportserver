import express from "express";
import { addNewTargetolog } from "../controllers/targetolog.controller";

const router = express.Router();

router.post("/targetolog", addNewTargetolog);

export default router;
