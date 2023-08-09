const express = require("express");
const mongoose = require("mongoose");
const Routs = require("./api/routes/Routs");
// const Routs = require("./api/routes/Routs");


const app = express();
app.use(express.json());

const mongooseLink =
 "mongodb+srv://mhmod1:Mhmodsa1@cluster0.xwbozgx.mongodb.net/"
mongoose.connect(mongooseLink);
mongoose.connection.on("connected",() => {
    console.log("mongo connected");
});

app.use(express.json());


app.get("/app", (req, res) => {
    res.status(200).json({
      message: "yes",
      batata: "5kg",
    });
  }
);//example



app.use("/", Routs);

module.exports=app;

