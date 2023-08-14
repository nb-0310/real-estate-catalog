const express = require('express');
// const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usersRoute = require('./Routes/login');
const postRoute = require('./Routes/post');
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());

//




mongoose.connect("mongodb+srv://manishkmr01234:y0yBWo1bQyQ5ksVc@cluster0.28njhl2.mongodb.net/?retryWrites=true&w=majority")
.then((response) => {
    console.log("Connected to mongo DB successfully!");
})
.catch( err => {
    console.log("Connection to DB failed!", err);
});



const port = process.env.PORT  || 4500;
app.use('/post', postRoute)
app.use('/user', usersRoute)

app.use("/", (req, res) => {
  res.send("welcome to our api server")
})

app.listen(port, ()=>{
  console.log(`App started port ${port}`)
})



// module.exports = router;










// "mongodb+srv://manishkmr01234:y0yBWo1bQyQ5ksVc@cluster0.28njhl2.mongodb.net/?retryWrites=true&w=majority"

