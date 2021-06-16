import config from "./config/config";
import mongodb from "./database";
import template from "./../template";
import path from "path";
import devBundle from "./devBundle";
import express from "express";
import userRouter from "./routes/user.routes";

const app = express();
const CURRENT_WORKING_DIR = process.cwd();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Complie application with webpack, use only on npm run development
devBundle.compile(app); 

//Load dist folder to use static files
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "./dist")));

//Routes
app.use("/api", userRouter);

//Send react components to browser DO NOT MOVE
app.get("*", (req, res) => {
  res.status(200).send(template());
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info(`Server started on port: ${config.port}`);
});
