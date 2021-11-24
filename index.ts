import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import reportRoutes from "./routes/report.route";
import targetologRoutes from "./routes/targetolog.route";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(reportRoutes);
app.use(targetologRoutes);

const start = async () => {
  try {
    await mongoose.connect("mongodb+srv://ilya:eazykatka@cluster0.u1x5r.mongodb.net/myFirstDatabase");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (e: any) {
    console.log(e.message);
  }
};

start();
