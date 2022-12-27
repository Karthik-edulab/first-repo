const dbConnect=require('./mongodb')

const insert=async ()=>{
    let Data=await dbConnect();
    Data=await Data.insert({brand:"iphone",model:"pro 12",price:4500,category:"mobile"})
    console.log(Data);
};
insert();