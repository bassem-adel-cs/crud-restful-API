const User=require("../model/usersmodel.js");
const status=require("../utlite/status.js");

const createusers=async function(req,res){
try{
const createUser= new User(req.body)
if(!createUser){
    res.status(400).json({status:status.fail,data:{message:"check the data of req.body"}})
}
 await createUser.save();
res.json({status:status.success,data:{user:createUser}})
}
catch(err){
res.status(500).json({status:status.error,message:err.message})


}
}
const deleteuserbyid=async function(req,res){
try{
const id=req.params.id;
const deleteduser=await User.findByIdAndDelete({_id:id})
if(!deleteduser){
res.status(404).json({status:status.fail,data:{message:"sorrry the user not found check the id"}})
}
res.json({status:status.success,data:null})
}
catch(err){
    res.status(500).json({status:status.error,message:err.message})
}
}
const getuserbyid=async function(req,res){
    try{
const id=req.params.id;
const user=await User.findById({_id:id})
if(!user){
   return res.status(404).json({status:status.fail,data:{message:"user not found"}})
}
res.json({status:status.success,data:{user:user}})

}
catch(err){
    res.status(500).json({status:status.error,message:err.message})
}
}
const getallusers=async function(req,res){
    try{
const allusers=await User.find({},{__v:0})
if(!allusers){
    return res.status(404).json({status:status.fail,data:{message:"users not found"}})
}
res.json({status:status.success,data:{users:allusers}})

}
catch(err){
    res.status(500).json({status:status.error,message:err.message})
}
}
const editusers=async function(req,res){
    try{
const id=req.params.id;
const potusers=await User.findByIdAndUpdate({_id:id},{$set:req.body},{ runValidators: true }   )
if(!potusers){
res.status(404).json({status:status.fail,data:{message:"user not found"}})
}
res.json({status:"success",data:{user:potusers}})
}
catch(err){
res.status(500).json({status:status.error,message:err.message})

}
}

module.exports={
    createusers,
    deleteuserbyid,
    getuserbyid,
    getallusers,
    editusers
}