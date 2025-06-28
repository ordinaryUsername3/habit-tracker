const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

// middleware
//core


//routes


//not found
app.use(notFound);

//error-handler
app.use(errorHandler);

app.get('/', (req, res) => res.send('Hello, world!'));

const startServer = async () {
    try {
        await connectDB();
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
    } catch (err) {
        console.error('Startup failed: ', err);
        process.exit(1);
    }
}
startServer();