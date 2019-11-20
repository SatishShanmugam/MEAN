//like the importing statements 
const express = require('express')
const mongoose = require('mongoose')
//importing player module here to use
const Player = require('../models/player')
//importing object id to use for get request
const ObjectId = require('mongoose').Types.ObjectId;
//connection string in which PKCricket is the database name
const db = "mongodb+srv://Satish:rggZjcypRntujcgj@pkdummy-oksws.mongodb.net/PKCricket?retryWrites=true&w=majority"
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

// get call when just api is mentioned
router.get('/',(req,res)=>{
    // res.send('Sent From MEAN API') 
    Player.find((err,docs)=>{
        if(!err){res.send(docs);}
      }); 
 })
// get particular id call when just api is mentioned
 router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with id:${req.parms.id}`)
    }
    else{
        Player.findById(req.params.id,(err,docs)=>{
            if(!err){res.send(docs);}
          }); 
    }
 })
//post method to save new play
 router.post('/addplayer',(req,res)=>{
    let userData = req.body
    let user = new Player(userData)
    user.save((error,addPlayer)=>{
        if(error){
            console.log('Error:'+error)
        }else{
            res.status(200).send(addPlayer)
        }
    })
})
 //exporting router
 module.exports = router