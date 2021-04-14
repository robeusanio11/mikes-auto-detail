const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/public')));

app.listen( PORT, (req, res) => {
  console.log("Listening on port:", PORT)
});