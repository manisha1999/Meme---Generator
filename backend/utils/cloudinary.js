require('dotenv').config
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name:"donfky48j",
    api_key: 285762983451764,
    api_secret: "DGCvTg8sCf3faaqZpqO7n-nuRxQ",
  });

  
module.exports = {cloudinary};