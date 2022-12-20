const mongoose=require('mongoose');

const imageSchema=new mongoose.Schema({
    image:{
        type:Object
    },
});

const Image=mongoose.model("Image",imageSchema);
module.exports=Image