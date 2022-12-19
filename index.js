const express = require('express')
const app = express();
const port = 8001;

const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);
const database='e-com'

async function getdata(){
    let result=await client.connect();
    let db=result.db(database);
    let collection=db.collection('products');
    let response=await collection.find({}).toArray();
    console.log(response)
}
getdata();

app.listen(port, ()=>{
    console.log(`Server started at ${port}`)
})

