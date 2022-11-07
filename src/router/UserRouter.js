const express = require("express");
const userRoute = express.Router();
const UserController = require("../controller/UserController");
const UserValidateDataBody = require("../middleware/UserValidateMiddleware");

userRoute.get("/", UserController.index);
userRoute.get("/create", UserController.create);
userRoute.post("/store", UserValidateDataBody.check, UserController.store);
userRoute.get("/:id/edit", UserController.edit);
userRoute.put("/:id", UserValidateDataBody.check, UserController.update);
userRoute.delete("/:id", UserController.destroy);

module.exports = userRoute;
