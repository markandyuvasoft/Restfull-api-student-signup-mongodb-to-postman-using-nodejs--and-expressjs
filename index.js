import express from 'express'
import * as url from 'url'
import db from '../db/conn.js'
import Student from '../models/students.js'
const indexrouter=express.Router()

// GET METHOD STUDENT START.............................................................................................
indexrouter.get("/students",async(req,res)=>{

    try{
        const get= await Student.find()
    
        res.send(get)
       
        }catch(err){
    

        }
})
// GET METHOD STUDENT END.............................................................................................


// GET API WITH ID START.............................................................................................
indexrouter.get("/students/:id",async(req,res)=>{

    try{

        const _id= req.params.id

        const getid= await Student.findById(_id)
        res.send(getid)
       
    }catch(err){
        res.send(err)
       }
})
// GET API WITH ID END........................................................................................


// POST API START...........................................................................................................
indexrouter.post("/students",(req,res)=>{

    console.log(req.body);
    const user = new Student(req.body)

    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((err)=>{

        res.status(400).send(err)
    })
})
// POST API END..........................................................................................................


// UPDATE API USING PUT START.............................................................................................
//update and check mongodb(refresh)


indexrouter.put("/students/:id", async (req,res)=>{

    try{
    
        const _id= req.params.id;
    
        const update= await Student.findByIdAndUpdate(_id, req.body)
    

        res.send(update)
    
    }catch(err){
    
    res.status(400).send(err)
    }
    })
// UPDATE API USING PUT END.....................................................................................


// DELETE API USING DELETE START.....................................................................
    
    indexrouter.delete("/students/:id",async (req,res)=>{

        try{

            const _id=req.params.id;

            const remove = await Student.findOneAndRemove(_id,req.body)

            res.send(remove)
        }catch(err){
            res.status(400).send(err)
        }
    })

// DELETE API USING DELETE END............................................................................
export default indexrouter;