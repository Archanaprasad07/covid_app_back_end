const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const router = require("./controller/patientRouter")


const app=express()


app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://archana2002:archana07@cluster0.zzcjkzd.mongodb.net/covidDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api/covid",router)


app.listen(3001,()=>
{
    console.log("server is running")
})