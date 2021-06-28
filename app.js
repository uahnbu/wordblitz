const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'blitz.html'));
app.use(express.static('assets'));
app.listen(port, () => console.log(`App running at http://localhost:${port}`));
