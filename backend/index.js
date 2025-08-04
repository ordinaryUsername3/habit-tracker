const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const userRoutes = require('./routes/userRoutes');
const habitRoutes = require('./routes/habitRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');




dotenv.config();
const corsOptions={origin: process.env.CLIENT_URL, credentials: true}
const PORT = process.env.PORT || 8000;
const app = express();

// middleware
//core
app.set('trust proxy', 1);
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));


app.use('/api/habits', habitRoutes);
app.use('/api/users',userRoutes);
//not found
app.use(notFound);

//error-handler
app.use(errorHandler);

app.get('/', (req, res) => res.send('Hello, world!'));

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
}
startServer();
