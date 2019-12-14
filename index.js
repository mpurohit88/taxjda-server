
/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, 'build')));
app.use('/build', express.static(path.join(__dirname, 'build')));

app.use('/api/upload', function (req, res, nex) {
  try {
    console.log("uploaded....");
    res.send("uploaded"); // Set disposition and send it.
  } catch (error) {
    next(error);
  }
});

app.use(function (error, req, res, next) {
  // Any request to this server will get here, and will send an HTTP
  // response with the error message 'woops'
  console.log("Server Error....", error);

  res.status(error.statusCode).send("error");
});

let port = process.env.PORT || 5000;

app.set('port', port);

/** Create HTTP server. */
const server = http.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port, () => console.log(`Server Running on port ${port}`));
