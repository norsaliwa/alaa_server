const express = require("express");
const { creatNewUser, deleteUserByPhone,} = require("../Controller/UserController");
const { createQuestion } = require("../Controller/createQuestion");
const UserRouter = express.Router();

UserRouter.post("/creatNewUser",creatNewUser)
UserRouter.delete("/deleteUserByPhone",deleteUserByPhone)
UserRouter.post("/createQuestion", createQuestion)

module.exports = UserRouter;