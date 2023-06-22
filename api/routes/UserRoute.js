const express = require("express");
const { creatNewUser,} = require("../Controller/UserController");
const UserRouter = express.Router();

UserRouter.get("/creatNewUser",creatNewUser)

module.exports = UserRouter;