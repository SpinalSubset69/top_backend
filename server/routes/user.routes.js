import express from "express";
import userController from "../controller/user.controller";

const router = express.Router();

router
  .route("/users")
  .post(userController.create_user)
  .get(userController.get_users);

export default router;
