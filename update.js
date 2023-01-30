const dbConnect = require('./mongodb');

const updateRecord = async () =>{
    const data = await dbConnect();
    const result = await data.updateOne({name:"moto g53"},
    {$set : {name : 'moto e5', price : 0}}
    )
    console.log(result)
}
updateRecord();