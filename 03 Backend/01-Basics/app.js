
const express = require('express');
const ejs = require('ejs');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorPage = require('./contorllers/404');

const app = express();



app.set('view engine', 'ejs');
app.set('views' , 'views');

// Use built-in Express parser instead of body-parser
app.use(express.urlencoded({ extended: false }));

// Add /admin prefix to admin routes
app.use('/admin', adminData.routes);
app.use(shopRoutes);

// 404 handler (should be last)
app.use(errorPage.pageNotFound);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});