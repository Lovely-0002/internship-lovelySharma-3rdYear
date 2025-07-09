require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require('./connect/connect');
const app = express();
app.get('/', (req, res) => {
    res.send("Welcome to our hotel!");
});
//Import router files
const personRoutes= require('./routes/personRoutes');
const menuItemRoutes= require('./routes/menuItemRoutes');
//Use the router
app.use(bodyParser.json());
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

const PORT = process.env.PORT || 3000;

// ✅ Start server
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
