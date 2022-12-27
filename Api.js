const express=require('express')
const { MongoDBNamespace } = require('mongodb')
const dbConnect=require('./mongodb')
const app=express()
const mongodb=require('mongodb')


app.use(express.json())

//get api with mongodb

app.get('/',async (req,res)=>{

    let data=await dbConnect();
    data=await data.find().toArray();
    res.send(data)
})
app.listen(5000)

// post api with mongodb

 app.post('/',async(req,res)=>{
    let data=await dbConnect();
    data= await  data.insert(req.body)
    res.send(data)
 })
 app.listen(5400)

 //Put api with mongodb 

   app.put('/',async (req,res)=>{
    let data= await dbConnect();
    let result=await data.updateOne({brand:req.body.brand},{$set:req.body})
    res.send({result:"update"})   
})
app.listen(6300)

//delete api with mongodb

app.delete('/:id',async (req,res)=>{
    let data=await dbConnect();
    let result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send("Done")
})
app.listen(6200)