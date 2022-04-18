const mongoose=require('mongoose');

// for hosting on remote
//it returns promise
mongoose.connect("mongodb://localhost:27017/EcommerceAPI", {//before collecting data in this db, we have to define schema in models
    //for stopping deprication warnning
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
    //in future you must have to pass the data
}).then(()=>{
    console.log('Connected to Database :: MongoDB');
}).catch((e)=>{
    console.log(' Error connecting to MongoDB', e);

})

