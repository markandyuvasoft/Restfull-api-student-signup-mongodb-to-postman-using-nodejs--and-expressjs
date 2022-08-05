import mongoose from "mongoose";
import validator from "validator";

const studentSchema = new mongoose.Schema({

name : {
    type: String,
    required:true,
    minlength:3
},
    email:{
        type:String,
        required:true,
        unique:[true, "email id present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },

    phone:{

            type:Number,
            min:10,
             required:true,
           
    },

    address:{
        type: String,
        required:true
    }
})


//create a collection

const Student = new mongoose.model('Student',studentSchema)

export default Student;