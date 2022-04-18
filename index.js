const express=require('express');


//importing db
const db=require('./config/mongoose');

const Product=require('./models/product');
const router=require('./routers/products');

const app=express();//now, we can use all the properties and method inside app

//dynamic way to giving port no.
const port=process.env.PORT || 8000;

//for using json data, we have to take the permission from express application
app.use(express.json());


//here we have to register our router
app.use(router);

app.listen(port,function(err){
    if(err){
        // console.log('Error',err);
        //Using interpolation means, writting variable name inside the string
        console.log(`Error in running the server: ${err}`);

    }
    console.log(`Server is running on port: ${port}`);
    
});