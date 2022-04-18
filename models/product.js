const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    
        id:{
            type:Number,
            required:true,
            unique:true
    
        },
        name:{
            type:String,
            required:true,
            trim:true
        },
        quantity:{
            type:Number,
            required:true
    
        }

})

//with the help of schema creating a new collections
// Telling mongoose that , this is model
const Product= new mongoose.model('Product', productSchema);

// Now export it
module.exports=Product;