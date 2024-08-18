require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT||3000;


  //  middleware 
app.use(express.json());
app.use(cors());


              //  mongodb database setup 

      const { MongoClient, ServerApiVersion } = require('mongodb');
      const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.tkh65wh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
      
      // Create a MongoClient with a MongoClientOptions object to set the Stable API version
      const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
      
      async function run() {
        try {
          const productsCollection = client.db('SiphonsFashion').collection('products');
          const reviewsCollection = client.db('SiphonsFashion').collection('reviews');

                //  Get all products 
          app.get('/products',async(req,res)=>{
            const products = productsCollection.find();
            const result = await products.toArray();
            res.send(result);
          })
                  // Get all reviews 
          app.get('/reviews',async(req,res)=>{
            const reviews = reviewsCollection.find();
            const result = await reviews.toArray();
            res.send(result);
          })
          // Connect the client to the server	(optional starting in v4.7)
          // await client.connect();
          // Send a ping to confirm a successful connection
          // await client.db("admin").command({ ping: 1 });
          console.log("Pinged your deployment. You successfully connected to MongoDB!");
        } finally {
          // Ensures that the client will close when you finish/error
          // await client.close();
        }
      }
      run().catch(console.dir);
      







app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})