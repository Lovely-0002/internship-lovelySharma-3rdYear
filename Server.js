require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const passport = require('./auth');
const connectDB = require('./connect/connect');
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

const app = express();

// ✅ Request logger
const logRequest = (req, res, next) => {
    console.log(`${new Date().toLocaleString()} Request made to : ${req.originalUrl}`);
    next();
};
app.use(logRequest);



// ✅ Middleware
app.use(passport.initialize());
app.use(bodyParser.json());

// ✅ Authentication middleware
const localAuthMiddleware = passport.authenticate('local', { session: false });

// ✅ Routes
app.get('/', (req, res) => {
    res.send("Welcome to our hotel!");
});

app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

// ✅ Server Start
const PORT = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`🚀 Server is running at http://localhost:${PORT}/`);
        });
    } catch (err) {
        console.error("❌ Failed to connect to DB:", err);
    }
};

start();
