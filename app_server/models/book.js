import {mongoose} from "mongoose";


const bookSchema = new Mongoose.Schema({

    name:{
        type:String,
        required:true,
        minlength:3
    },
        
    genre:{
        type:String,
        required:true    },


    author:{
        type:String,
        required:true    },
       
    release_year:{
            type:Number,
            required:true
        },
    
    copies_sold:{
        type:Number,
        required:true
    }


});

mongoose.model('Book','bookSchema');