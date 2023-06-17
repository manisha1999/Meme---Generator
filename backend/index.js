const express = require('express')

const mongoose = require('mongoose')


const saveroute = require('./routes/Memeroute')
const cors = require("cors");

mongoose.set("strictQuery", true);

mongoose.connect("mongodb+srv://manisha:manisha@memes.yxua58y.mongodb.net/test").then(() => {
    const app = express()
    app.use(express.json())



    app.use(express.urlencoded({
        extended: true,
        limit: '50mb'
    }));
    const corsOptions = {
        origin: '*',
        credentials: true,
        optionSuccessStatus: 200,
    }
    app.use(cors(corsOptions))
    app.use(saveroute)

    app.listen("3001", () => {
        console.log("server created")
    });
});






