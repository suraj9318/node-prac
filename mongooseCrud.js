const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
const ProductSchema = new mongoose.Schema({
    name : String,
    brand : String,
    price : Number,
    category : String
});

const saveInDb = async()=>{

    const ProductModal = mongoose.model('products',ProductSchema);
    const data  = new ProductModal({
        name : 'nord 1',
        brand : 'One Plus',
        price : "8200",
        category : 'mobile'
    });
    const result = await data.save()
    console.log(result)
    
}  

const updateInDb = async()=>{
    const ProductModal = mongoose.model('products',ProductSchema);
    let data = await ProductModal.updateOne({name:"nord 1"},{$set : {name : "nord 7"}})
    console.log(data);
}


const deleteInDb = async() =>{
    const ProductModal = mongoose.model('products',ProductSchema);
    const data =await ProductModal.deleteOne({name : "nord 1"})
    console.log(data);
}

const readData = async() =>{
    const ProductModal = mongoose.model('products',ProductSchema);
    const data = await ProductModal.find();
    console.log(data);
}
readData();
// deleteInDb()
// updateInDb();
// saveInDb()