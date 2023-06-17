const mongoose = require('mongoose')

const memeSchema =mongoose.Schema({
    memename:{
        type  : String,
        required : true
       },
    memeurl:{
        type  : String,
        required : true
       },
    },
{
    timestamps: true}
);

const Memes = mongoose.model('Meme',memeSchema)
module.exports = Memes