const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes/secretSantaRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);

// eslint-disable-next-line prefer-template, no-console
console.log('API server started on: ' + port);
