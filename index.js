const express = require("express");
const mongoose = require("mongoose");
const usersrouter = require("./routes/usersroutes");
const status=require("./utlite/status");
const dotenv=require("dotenv")
dotenv.config();
const app = express();
app.use(express.json());
const uri = process.env.DB_NAME;
mongoose.connect(uri)
  .then(() => {
    console.log("✅ Connection to MongoDB successful");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

app.use("/users", usersrouter);
app.use((req, res) => {
  res.status(404).json({
    status:"fail",
    message: "This route not found"
  });
});
app.use((err,req,res,next)=>{
res.status(500).json({status:"error",message:err.message});

});
const port=process.env.PORT
app.listen(port, () => {
  console.log(`🚀 The app is running on port 5000`);
});
