const express = require("express");
const mongoose = require("mongoose");
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

// app.use(morgan("dev"));
// app.use("/", Routs);





module.exports = app;

/*
const express = require("express");
const mongoose = require("mongoose");
const GameListModule = require('./api/modules/GameData');
const Routs = require("./api/routs/Rout");

const app = express();
app.use(express.json());

const mongooseLink = "mongodb+srv://MOSA:ma741369@miuniverse.uqftmxz.mongodb.net/"
mongoose.connect(mongooseLink);
mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});

// console.log(A.results[0].name);
// console.log(A.results.length);

// const gameList =new GameListModule({GameData:"game"})
// gameList.save().then(()=>{console.log('saved');})

// for (let i = 0; i < A.results.length; i++) {
//   const gameList =new GameListModule({GameData:A.results[i]})
//   gameList.save().then(()=>{console.log('saved');})
//   // const element = A.results[i].name;
//   // console.log(element);
// }


app.get("/app", (req, res) => {
    res.status(200).json({
      message: "yes",
      batata: "5kg",
    });
  }
);//example

const deleteAllUser = async()=>{
  UserModule.deleteMany({})
  .then(() => {
    console.log('All users deleted');
  })
  .catch((error) => {
    console.error('Error deleting users:', error);
  });
}
// deleteAllUser()

app.post("/test", (req, res) => {
  try{
    res.status(200).json(req.body)
    // console.log(req.body);
  }catch(e){
    res.status(500).json({message:e.message})
    console.log(e.message);
  }
})

app.use("/", Routs);

module.exports=app;
 */
