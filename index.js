const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');

const app = express();
app.use(express.static(`${__dirname}/public`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/public/index.html`));
});

app.listen(process.env.PORT || 8080,() => {
  console.log(`server has started`);
});
