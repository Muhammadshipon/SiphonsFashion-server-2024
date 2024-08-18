require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware 
app.use(express.json());
app.use(cors());

// MongoDB database setup 
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
        const reviewsCollection = client.db('SiphonsFashion').collection('reviews')
        // Get all products with filtering, sorting, and pagination
        app.get('/products', async (req, res) => {
            const { page = 1, limit = 10, search = '', sort = '', seller, category, priceRange } = req.query;

            const query = {
                name: { $regex: search, $options: 'i' },
                ...(seller && { seller }),
                ...(category && { category }),
                ...(priceRange && {
                    price: {
                        $gte: parseInt(priceRange.split(',')[0]),
                        $lte: parseInt(priceRange.split(',')[1]),
                    }
                }),
            };

            let sortOption = {};
            if (sort === 'priceAsc') sortOption.price = 1;
            else if (sort === 'priceDesc') sortOption.price = -1;
            else if (sort === 'newest') sortOption.creationDate = -1;

            try {
                const products = await productsCollection
                    .find(query)
                    .sort(sortOption)
                    .skip((page - 1) * limit)
                    .limit(parseInt(limit))
                    .toArray();

                const count = await productsCollection.countDocuments(query);

                res.json({
                    products,
                    totalPages: Math.ceil(count / limit),
                    currentPage: parseInt(page),
                });
            } catch (error) {
                console.error('Error fetching products:', error);
                res.status(500).json({ error: 'Server error' });
            }
        });


        // get all products for add to cart 
        app.get('/all-products', async (req, res) => {
     
          const cursor = productsCollection.find();
          const result = await cursor.toArray();
          res.send(result);
      })   


        app.get('/reviews', async (req, res) => {
     
          const cursor = reviewsCollection.find();
          const result = await cursor.toArray();
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

// Default route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
