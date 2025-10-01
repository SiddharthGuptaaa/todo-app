const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;



let _db;

const mongoConnect = (callback)=>{
  MongoClient.connect(MONGO_URL).then(client => {
    callback();
    _db=client.db("airbnb");
  }).catch(err => {
    console.log("Error while connecting to database",err);
  })
}

const getDb=()=>{
  if(!_db){
    throw new Error("Database not connected");
  }
  return _db;
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;
