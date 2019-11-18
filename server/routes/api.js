//like the importing statements 
const express = require('express')

//router configuration
const router = express.Router()

//dummy get call when just api is mentioned
router.get('/',(req,res)=>{
     res.send('Sent From MEAN API')  
 })

 //exporting router
 module.exports = router