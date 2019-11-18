//like the importing statements 
const express = require('express')
const mongoose = require('mongoose')
const db = "mongodb+srv://Satish:rggZjcypRntujcgj@pkdummy-oksws.mongodb.net/test?retryWrites=true&w=majority"
//mongoDB connection
mongoose.connect(db,err=>{
    if(err){
        console.log('Error:'+err)
    }else{
        console.log('PK mongoDB connected')
    }
})
//router configuration
const router = express.Router()

//dummy get call when just api is mentioned
router.get('/',(req,res)=>{
     res.send('Sent From MEAN API')  
 })

 //exporting router
 module.exports = router