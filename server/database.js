import config from "./config/config";
import mongoose from "mongoose";

mongoose
  .connect(config.mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then((db) => console.log("Database connected"));
