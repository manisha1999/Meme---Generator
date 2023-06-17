const { Router } = require('express');
const express = require('express');
const Memes = require('../models/Meme');
const { cloudinary } = require('../utils/cloudinary');
const router = express.Router();


router.post("/upload", async (req, res) => {
  try {
    const fileStr = req.body.data
    const uploadResponse = await cloudinary.uploader.upload(fileStr,
      {
        upload_preset: 'memes',
      }
    )
    console.log(uploadResponse)
    res.json({ msg: "uploaded successfully" })
  }
  catch (error) {
    console.log(error)
    res.status(500).json({ err: "Something went wrong" })
  }
});


router.get("/getmeme", async (req, res) => {
  const { resources } = await cloudinary.search.expression('folder :memes').sort_by('public_id', 'desc').max_results(30).execute();
  const publicIDs = resources.map(file => file.public_id);
  res.send(publicIDs);
})


router.delete("/delete", async (req, res, next) => {
  const { publicId } = req.body;

  try {

    const result = await cloudinary.uploader.destroy(publicId);
    res.json(result);
  } catch (error) {

    res.status(500).json({ error: 'Failed to delete image' });
  }
});


module.exports = router;