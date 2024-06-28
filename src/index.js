import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";
import connectDB from "./db/index.js";
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("app is runnign at the above");
      console.log(process.env.PORT);
    });
  })
  .catch((er) => {
    console.log(er);
  });

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello there",
  });
});
