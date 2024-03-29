const express = require('express');
const app = express()
const bodyparser = require("body-parser");
const userRouter = require("./routes/userRoutes");
const cors = require("cors");

app.use(cors());

// Middleware
app.use(bodyparser.json());

// Starter routes
app.use("/api", userRouter);



module.exports = app;

/*const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

*/