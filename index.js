const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.use(express.json());

app.use('/meals/categories', require('./src/controllers/categories'));
app.use('/meals', require('./src/controllers/meals'));

app.use((req, res) => {
  res.status(404).send({error: 'Method not found'})
});

module.exports.handler = serverless(app);
