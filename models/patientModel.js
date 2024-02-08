const mongoose=require("mongoose")

const patientSchema=new mongoose.Schema(
    {
        name:String,
        mobile:String,
        address:String,
        status:String

    }
)

module.exports=mongoose.model("covid",patientSchema)