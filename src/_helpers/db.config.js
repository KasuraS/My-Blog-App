const MongoClient = require("mongodb").MongoClient;
const config = require("./server.config");

module.exports = async function onConnect() {
  const { dbUser, dbPassword, dbName } = config;
  const uri = `mongodb+srv://${dbUser}:${dbPassword}@my-blog-app-cluster.houff.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, { useNewUrlParser: true });

  // connect to the MongoDB cluster
  await client.connect((err) => {
    console.log(err);
    // perform actions on the collection object
    client.close();
  });
};
