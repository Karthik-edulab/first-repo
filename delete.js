
const dbConnect=require('./mongodb');

const deleteData=async ()=>{
    let data=await dbConnect();
    data=await data.deleteMany({name:'vivo'})
console.warn(data)
}
deleteData();

