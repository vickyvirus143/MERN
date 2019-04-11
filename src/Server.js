const express= require('express');
const mongoose =require('mongoose')
const cors= require('cors')
const bodyparser= require('body-parser')
const ServerPortRouter= require('./ServerPortRouter')

const app=express()
const PORT = 4001

const config =require ('./DB');

mongoose.connect(config.DB).then(
    ()=>{ console.log('Database is connected')},
    err => {console.log('Can not connect to database'+ err)}
)

app.use(cors())
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use('/serverport', ServerPortRouter)

app.listen(PORT, function(){
    console.log('Server is running on port number: ', PORT)
})