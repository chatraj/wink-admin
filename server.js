// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
//const cors = require('cors');

// Get our API routes
const api = require('./server/routes/api');

const nbc = require('./server/lib/nbc');
const ner = require('./server/lib/ner');

const app = express();


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to client & temp
app.use(express.static(path.join(__dirname, 'dist')));

//app.options('*', cors());

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', req.get('origin'));
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

//initialize workspace;
nbc.loadWorkSpace(__dirname);
ner.loadWorkSpace(__dirname);

// set rootPath
app.use(function(req, res, next) {
  req.rootPath = __dirname;
  next();
});

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';

app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));