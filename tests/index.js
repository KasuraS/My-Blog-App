const { expect } = require("chai");
const MongoClient = require("mongodb").MongoClient;
const config = require("../src/_helpers/server.config");
const _config = require("../src/_helpers/local.server.config");

describe("Test database connection", () => {
  const { dbName, dbUser, dbPassword } = config;

  it("constants should not be undefined", () => {
    expect(_config["dbUser"]).to.be.equal(dbUser);
    expect(_config["dbPassword"]).to.be.equal(dbPassword);
    expect(_config["dbName"]).to.be.equal(dbName);
  });

  it("db connection should be successful", async () => {
    const uri = `mongodb+srv://${dbUser}:${dbPassword}@my-blog-app-cluster.houff.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true });

    // connect to the MongoDB cluster
    await client.connect((err) => {
      console.log(err);
      // perform actions on the collection object
      client.close();
    });
  });
});
