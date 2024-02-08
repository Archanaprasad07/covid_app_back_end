const express=require("express")
const patientModel = require("../models/patientModel")



const router=express.Router()

router.get("/view",async(req,res)=>
{
    let data=await patientModel.find()
    res.json(data)
})


router.post("/search",async(req,res)=>
{
    let input=req.body
    let data=await patientModel.find(input)
    res.json(data)


})

router.post("/add",async(req,res)=>{
    let data=req.body
    let patient=new patientModel(data)
    let response=await patient.save()
    res.json(
        {
            status:"success"
        }
    )
})


module.exports=router