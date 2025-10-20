const express=require("express");
const router=express.Router();
const uservalidation=require("../middlewears/usersvalidation");
const control=require("../controller/userscontoller");
router.post("/",uservalidation,control.createusers)
router.delete("/:id",control.deleteuserbyid)
router.get("/:id",control.getuserbyid)
router.get("/",control.getallusers)
router.put("/:id",control.editusers)
module.exports=router