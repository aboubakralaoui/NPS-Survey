const express = require("express");
const mongoose = require("mongoose");
const app = express();
const keys = require("./config/keys");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth");
const voteRoutes = require("./routes/vote");
const dashboardRoutes = require("./routes/dashboard");


const db = keys.MongoURI;


mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected ..."))
    .catch((err) => console.log(err));


app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    next();
});


app.use(authRoutes);
app.use(voteRoutes);
app.use(dashboardRoutes);


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server Started on Port ${PORT}`));
