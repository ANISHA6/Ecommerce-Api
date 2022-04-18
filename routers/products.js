const express=require('express');

//creating router
const router=new express.Router()

const Product=require('../models/product');

//we will handle post request, that is, adding new data
router.post("/product", async(req, res)=>{
    try{
        //Adding data to the database, feching data by postman
        const addingProducts= new Product(req.body);
        console.log(req.body);
       const insertProduct=await addingProducts.save();//returing a promise
        //in future it will give some data for it we have to wait, and  store data in some variable

        res.status(201).send(insertProduct);// to show the data, that it has saved
        console.log('product Added');


       }catch(e){
        res.status(400).send(e);

    }
})

//we will handle get request
router.get("/product", async(req, res)=>{
    try{
       const getProduct=await Product.find({}).sort({"id":1});
        res.send(getProduct);// to show the data, that it has saved

       }catch(e){
        res.status(400).send(e);

    }
})


//we will handle get request of indivisually
router.get("/product/:id", async(req, res)=>{
    try{
        const _id=req.params.id;
       const getProductI=await Product.findById({_id});//{_id:_id}, here i used object destructuring
        res.send(getProductI);// to show the data, that it has saved
       }catch(e){
        res.status(400).send(e);

    }
})

//we will handle patch request of indivisually
router.patch("/product/:id", async(req, res)=>{
    try{
        const _id=req.params.id;
       const updateProductI=await Product.findByIdAndUpdate(_id,req.body,{
           new:true
       });//{_id:_id}, here i used object destructuring
        res.send(updateProductI);// to show the data, that it has saved
        console.log('Updated successfully');

       }catch(e){
        res.status(500).send(e);//500 indicates, server related error

    }
})

//we will handle delete request indivisually
router.delete("/product/:id", async(req, res)=>{
    try{
        const _id=req.params.id;
       const deleteProduct=await Product.findByIdAndDelete(_id);//{_id:_id}, here i used object destructuring
        res.send(deleteProduct);// to show the data, that it has saved
        console.log('product deleted');

       }catch(e){
        res.status(500).send(e);//500 indicates, server related error

    }
})

module.exports=router;





