const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://delivery.kzfyyzm.mongodb.net/i";
const user = "delivery";
const password = "<delivery>";

const client = new MongoClient(uri, {
  auth: {
    user,
    password
  }
});

// ...
