

const {MongoClient}=require('mongodb')
const url='mongodb://localhost:27017'
const client=new MongoClient(url);
const database='e-com'


async function getData(){
    let result=await client.connect();
    let db=result.db(database);
    let collection=db.collection('products')
    let response=await collection.find().toArray();
    console.log(response)
}

getData()

// async function dbConnect(){
// let result=await client.connect();
// let db=result.db(database);
// return db.collection('products')
// }

// const main=async()=>{
//     let data=await dbConnect();
//        data=await data.find().toArray();
//        console.log(data)
// }
// main()

// dbConnect().then((res)=>{
//    res.find().toArray().then((data)=>{
//     console.log(data)
//    })
// })