// server/testMongoConnection.js
const { MongoClient } = require('mongodb');

async function testConnection() {
  // const uri = "mongodb+srv://dinhthienmenh1505:JNa6yEu6rnh7pHle@bumble-clone.7yhho.mongodb.net/?retryWrites=true&w=majority";
  const uri = "mongodb://localhost:27017";
  
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connected successfully to MongoDB");

    // Optionally, you can list databases to verify the connection
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  } catch (error) {
    console.error("Connection failed", error);
  } finally {
    // Close the connection
    await client.close();
  }
}

testConnection().catch(console.error);