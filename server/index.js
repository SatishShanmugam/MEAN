//like the importing statements 
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// defining the port nos
const PORT = 3000

//importing the api 
const api = require('./routes/api')

//create object for the express to use for middleware
const app = new express() 

//middle ware calls
 app.use(cors())
 app.use(bodyParser.json())

 //mentioning the url to go fetch api while mentioned like /api
 app.use('/api',api)

//dummy get call
app.get('/',(req,res) =>{
    res.send('Hi from the MEAN stack server from index.js')
})

//starting to listen the express server here
app.listen(PORT,(req,res)=>{
    console.log('Server running from localhost:'+PORT)
})