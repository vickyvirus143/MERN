const mongoose= require('mongoose')
const Schema= mongoose.Schema;

const ServerPort = new Schema({
    productname:{type: String},
    productprice:{type: Number}
},{
    collection: 'productsshoppee'
})

module.exports= mongoose.model('ServerPort', ServerPort)

