const dbConnect = require('./mongoDb');

const deleteRecord = async () =>{
    const data = await dbConnect();
    const result = await data.deleteMany({name:"moto e5"})
    if(result.acknowledged){
        console.log("data deleted succesfully")
    }
}
deleteRecord()