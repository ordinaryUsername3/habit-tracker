const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

app.get('/', (req, res) => res.send('Hello, world!'));

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});