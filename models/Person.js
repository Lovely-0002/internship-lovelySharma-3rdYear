const mongoose=require('mongoose');
const personSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age: {
        type: Number,
        maxvalue:100,
    },
    work: {
        type:String,
        enum:['chef','waiter','manager'],
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    salary:{
        type: String,
        required: true
    }

});
const Person=mongoose.model('Person',personSchema);
module.exports=Person;