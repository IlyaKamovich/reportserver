import express from "express";
import mongoose from "mongoose";
import { TargetologReports } from "./models/reports.js";

const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/reports", async (req, res, next) => {
  TargetologReports.find({}).then((reports) => res.status(200).json({ reports }));
});

const start = async () => {
  try {
    await mongoose.connect("mongodb+srv://ilya:eazykatka@cluster0.u1x5r.mongodb.net/myFirstDatabase", {
      useNewUrlParser: true,
    });

    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (e) {
    console.log(e.message);
  }
};

start();
