const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));

// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use('/bundles', router.bundles);
// Handling AJAX requests to the API by passing off requests to the api router
app.use('/api', router.api);

app.get('/loaderio-*', (req, res) => {
	res.status(200).send('loaderio-6028ee428bcad7114b1b4ace2a18df61');
});

app.get('/:id', (req, res) => {
	res.sendFile(`${PUBLIC_DIR}/index.html`);
});

module.exports = app;
