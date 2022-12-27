

const dbConnect=require('./mongodb')


// async function getData(){
//     let result=await client.connect();
//     let db=result.db(database);
//     let collection=db.collection('products')
//     let response=await collection.find().toArray();
//     console.log(response)
// }

// getData()


const main=async()=>{
    let data=await dbConnect();
       data=await data.find().toArray();
       console.log(data)
}
main();
      


       //another way
// dbConnect().then((res)=>{
//    res.find().toArray().then((data)=>{
//     console.log(data)
//    })
// })