const express = require('express');
const app  = express();
app.use(express.json()); // ✅ Correct
const feedRoutes = require('./routes/feed');

// app.use(express.urlencoded({ extended: false }));  // ✅ Correct
app.use(feedRoutes);

app.use((req, res, next) => {
    res.setHeader("Access-Control-allow-Origin", "*");
    res.setHeader("Access-Control-allow-Methods","GET,POST ,PUT,DELETE");
    res.setHeader("Accsess-Control_Allow-Headers","content-type,Authorization");
})

app.listen(8080);