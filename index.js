const express = require('express');
const app = express();

const { port } = require('./config/environment');

app.use(express.static(`${__dirname}/public`));

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Express is running on port ${port}`));

module.exports = app;
