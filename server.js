require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = require('./aws-config');

const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.S3_BUCKET_NAME,
        acl: 'public-read',
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname);
        },
    }),
});

// Define Mongoose model
const Item = require('./models/item.model');

// Define routes
const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

// Route to handle item addition
app.post('/items/add', upload.single('image'), (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const imageUrl = req.file.location;

    const newItem = new Item({ name, description, imageUrl });

    newItem.save()
        .then(() => res.json('Item added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
