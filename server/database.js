import config from "./config/config";
import mongoose from "mongoose";

console.log(process.env.MONGODB_URI);

mongoose
  .connect(config.mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,   
  })
  .then((db) => console.log("Database connected"));
