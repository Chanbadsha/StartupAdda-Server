require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;
const url = process.env.MONGODB_URL || "";

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the startup add backend server",
  });
});

// Mongodb connect
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const run = async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Data Base
    const startupDataBase = client.db("StartUpAdda");
    const StartUpCollection = startupDataBase.collection("StartUpCollection");
    const CommentsCollection = startupDataBase.collection("CommentsCollection");

    // Crude Operation

    // Get all data
    app.get("/ideas", async (req, res) => {
      try {
        const ideas = await StartUpCollection.find({}).toArray();

        res.status(200).json(ideas);
      } catch (error) {
        res.status(500).json({
          message: "Failed to fetch ideas",
          error: error.message,
        });
      }
    });
    // Get Single Startup Ideas By Id
    app.get("/ideas/:ideasId", async (req, res) => {
      const { ideasId } = await req.params;
      const filter = {
        _id: new ObjectId(ideasId),
      };
      const ideas = await StartUpCollection.findOne(filter);
      res.json(ideas);
    });

    // Post idea
    app.post("/ideas", async (req, res) => {
      const postData = req.body;

      const docs = { ...postData };
      const data = await StartUpCollection.insertOne(docs);
      // console.log(data);
      res.json({ success: true, data });
    });

    // Post comment
    app.post("/comment", async (req, res) => {
      const comments = req.body;
      const data = await CommentsCollection.insertOne(comments);
      // console.log(data);
      res.json({ success: true, data });
    });

    // Update Ideas by id

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
};
run().catch(console.dir);

app.listen(port, () => {
  console.log(`The startup adda server is running on port ${port}`);
});
