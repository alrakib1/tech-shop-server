const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


// middlewares

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('tech shop server running')
  })
  
  app.listen(port, () => {
    console.log(`server running on port ${port}`)
  })