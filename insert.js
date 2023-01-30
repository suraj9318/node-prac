const dbConnect = require('./mongoDb');

const insert = async() =>{
    const db =  await dbConnect();
    const result = await db.insert({
        name: "moto g53",brand:"Motorola",price:450, category :"mobile" 
    })
    if(result.acknowledge){
        console.log("data Inserted");
    }
}
insert()