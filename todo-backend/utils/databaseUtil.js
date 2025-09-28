const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const MONGO_URL =
  "mongodb+srv://root:root@cluster0.yef6no0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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