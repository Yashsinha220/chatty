const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
const userroute = require('./routes/UserRoute.js')
const messageroute = require('./routes/MessageRoute.js')
const app = express();

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("data base connected succusfully" , MONGO_URL);
  })
  .catch((e) => {
    console.log("error thrown by the server", e);
  });
app.get("/", (req, res) => {
  res.send("HI user how are you");
});

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use('/api/auth' , userroute);
app.use('/api/messages' , messageroute)

app.listen(PORT, () => {
  console.log(`server is running at port : http://localhost:${PORT}`);
});
