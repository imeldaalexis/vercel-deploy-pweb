const upload = require("../middleware/upload");
const express = require("express");
const router = express.Router();

router.post("/upload", upload.single("file"), (req, res) => {
    if(req.file === undefined) return res.send("you must select a file");
    const imgUrl = `https://vercel-deploy-pweb.vercel.app/${req.file/filename}`;
    return res.send(imgUrl); // kalo mau tiap upload langsung keluar gambar
}) 

module.exports = router;

