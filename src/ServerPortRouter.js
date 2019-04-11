const express= require('express')
const app= express()
const ServerPortRouter = express.Router()

const ServerPort =require('./ServerPort')

ServerPortRouter.route('/add').post(function(req,res){
    const serverport =new ServerPort(req.body)
    serverport.save().then(serverport=>{
        res.json('Product added Successfully')
    })
    .catch(err=>{
        res.status(400).send("unable to save to database")
    })
})
ServerPortRouter.route('/').get(function(req,res){
    ServerPort.find(function(err,serverports){
        if(err){
            console.log(err)
        } else{
            res.json(serverports)
        }
    })
})

ServerPortRouter.route('/edit/:id').get((req,res,next)=>{

    ServerPort.findById({_id: req.params.id},(err,serverports)=>{
        if(err){
            res.json(err)
        }
        else{

            res.json(serverports)
            console.log(serverports)
        }
    })

});

ServerPortRouter.route('/edit/:id').put((req,res,next)=>{
    ServerPort.findByIdAndUpdate({_id: req.params.id},req.body,
        (err,serverports)=>{
     
    if(err){
        res.json(err)
    }
    else{
        res.json("edited")
     
    }
})
 });
 
 

ServerPortRouter.route('/deleteproduct/:id').delete(function(req,res){
    ServerPort.remove({_id: req.params.id}, function(err,serverports){
        if(err){
            console.log(err)
        } else{
            res.json(serverports)
        }
    })
})
 
module.exports= ServerPortRouter