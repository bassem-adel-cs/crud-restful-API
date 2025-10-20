const mongoose=require("mongoose");
const schema=new mongoose.Schema({
name:{
    type:String,
    required:[true,"the name is required"]
},
age:{
    type:Number,
    required:[true,"the age is required"],
  min: [18, 'يجب أن يكون العمر 18 عامًا أو أكثر'],
}
})
const User=mongoose.model("Login",schema);
module.exports=User