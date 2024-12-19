
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

const mongoURI = process.env.MONGO_URI
console.log(mongoURI);
//mongodb+srv://imeldaalexisj:surabaya@clusterFP.eoltm.mongodb.net/chatAppRevisi?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true

mongoose.connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.get('/', async(req, res) => {
  return res.status(200).send("Successful");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
