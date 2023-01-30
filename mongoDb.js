const {MongoClient} = require('mongodb')
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url);

const dbConnect = async () =>{
  const result = await client.connect();
  const db = result.db('e-comm');
  return db.collection('products');
    
}
module.exports = dbConnect;