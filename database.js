// const { MongoClient } = require('mongodb');
// const config = require('./dbConfig.json');

// async function main() {
//   // Connect to the database cluster
//   const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
//   const client = new MongoClient(url);
//   const db = client.db('water');
//   const collection = db.collection('rating');

//   // Test that you can connect to the database
//   (async function testConnection() {
//     await client.connect();
//     await db.command({ ping: 1 });
//   })().catch((ex) => {
//     console.log(`Unable to connect to database with ${url} because ${ex.message}`);
//     process.exit(1);
//   });

//   // Insert a test document
//   const rating = {
//     star: '5'
//   };
//   await collection.insertOne(rating);
// }

const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

// Connect to the database cluster
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('water');
const collection = db.collection('rating');

async function main() {
  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  // Insert a document
  // const rating = {
  //   stars: 3
  // };
  // await collection.insertOne(rating);

  // Query the documents
  // const query = { stars: 'stars', stars: { $lt: 2 } };
  // const options = {
  //   sort: { score: -1 },
  //   limit: 10,
  // };

  // const cursor = collection.find(query, options);
  // const rentals = await cursor.toArray();
  // rentals.forEach((i) => console.log(i));
}
//const rating = localStorage.getItem("rating")
//console.log(localStorage.getItem('rating'))


async function addRating(rating) {
  await collection.insertOne(rating);
}

main().catch(console.error);

module.exports = {addRating};

