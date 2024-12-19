const express = require('express');
const Message = require('../Models/messageModel.js');  // Import the Message model
const path = require('path'); 
const router = express.Router();

//init app and middleware
const app = express()
app.use(express.json());

// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'FrontEnd')));

// // Serve index.html when accessing the root ("/") URL



router.get("/messages", async (req, res) => {
  try {
      const allMessages = await Message.find({}).select('-_id _data id body from to timestamp hasQuotedMsg'); 
      console.log(`Found ${allMessages.length} messages`); 

      return res.json(allMessages); 
  } catch (error) {
      console.error("Error fetching messages:", error); 
      return res.status(500).send(error); 
  }
});

router.post("/messages", async (req,res)=> {
    const message = req.body;

    try {
        const newMessage = await Message.create(message);
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ error: 'Could not create a new document' });
    }
})

router.get("/messages/:senderId", async (req, res) => {
  try {
      const id = req.params.senderId;
      const message = await Message.findOne({ senderId: id });
  
      if (!message) {
          return res.status(404).json({
              error: "No message found", 
          });
      }
      
      return res.json(message); 
  } catch (error) {
      return res.status(500).send(error);
  }
});

router.post('/post', async (req, res) => {
  try {
    const { body, currentContact, myContact } = req.body;

    if (!body || !currentContact || !myContact) {
      return res.status(400).send("Missing required fields: body, currentContact, or myContact.");
    }

    const timestamp = Date.now();  
    const datemessage = Math.floor(timestamp / 1000); 

    const newMessage = new Message({
      _data: {
        id: {
          fromMe: true, 
          remote: currentContact,
          id: `${timestamp}_${Math.random().toString(36).substr(2, 9)}`,
          _serialized: `true_${currentContact}_${timestamp}`
        },
        viewed: false,
        body,
        type: "chat",
        t: datemessage,  
        notifyName: "You",
        from: myContact,
        to: currentContact,
        ack: 1,
        isNewMsg: true,
        star: false,
        recvFresh: true,
        viewMode: "VISIBLE",
        timestamp  
      },
      id: { 
        fromMe: true, 
        remote: currentContact,
        id: `${timestamp}_${Math.random().toString(36).substr(2, 9)}`,
        _serialized: `true_${currentContact}_${timestamp}`
      },
      ack: 1,
      hasMedia: false,
      body,
      type: "chat",
      timestamp,  
      from: myContact,
      to: currentContact,
      deviceType: "web",
      hasReaction: false,
      links: []
    });

    await newMessage.save();
    console.log("Message saved:", newMessage);
    res.redirect("https://vercel-deploy-pweb.vercel.app/");
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
