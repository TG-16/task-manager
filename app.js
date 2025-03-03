const express = require('express');
const app = express();
const routes = require('./routes/taskroute');
const mongoose = require('mongoose');
const morgan = require('morgan');


const dburl = "mongodb://localhost:27017/taskmanager";

mongoose.connect(dburl)
.then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => console.log("Server started on http://localhost:3000"));
})
.catch((error) => console.log("Error connecting to the database", error));

app.use(morgan('dev'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(routes);