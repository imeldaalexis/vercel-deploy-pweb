
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const messageRoutes = require('./routes/messageRoutes');

const PORT = process.env.PORT
console.log(PORT);


app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use('/api', messageRoutes);

const mongoURI = "mongodb://imeldaalexisjbaru:1Gh8Y4DxDNf8GB47@cluster0-shard-00-00.g70d8.mongodb.net:27017,cluster0-shard-00-01.g70d8.mongodb.net:27017,cluster0-shard-00-02.g70d8.mongodb.net:27017/chatAppRevisi?replicaSet=atlas-9d8ugm-shard-0&ssl=true&authSource=admin"
console.log(mongoURI);

mongoose.connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => console.error("MongoDB connection error:", err));

const db = mongoose.connection;
db.once('open', () => { //maybe add chatAppRevisi here?
  console.log('Connected to MongoDB database chatAppRevisi');
});

app.get('/', async(req, res) => {
  return res.status(200).send("Successful");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
