const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name : String,
    brand : String,
    price : Number,
    category : String
});

const productModel = mongoose.model('products',productSchema)
module.exports = productModel