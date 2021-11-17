import express from "express";
import mongoose from "mongoose";
import reportRoutes from "./routes/report.route.js";
import targetologRoutes from "./routes/targetolog.route.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(reportRoutes);
app.use(targetologRoutes);

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
