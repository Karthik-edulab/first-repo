
const dbConnect=require('./mongodb')

const update=async ()=>{
    let data=await dbConnect();
    let result=await data.update({brand:'oppo'},{$set:{brand:'vivo'}});
    console.warn(result)
}
update();