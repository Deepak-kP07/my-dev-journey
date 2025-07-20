const express = require('express');
const app  = express();
app.use(express.json()); // ✅ Correct


// Backend - make sure this comes BEFORE your routes
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});
const feedRoutes = require('./routes/feed');

// app.use(express.urlencoded({ extended: false }));  // ✅ Correct
app.use(feedRoutes);



app.listen(8080);