var express = require("express");
var app = express();
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var path = require("path");

var mongoose = require("mongoose");

mongoose.connect("mongodb://user:user@ds231199.mlab.com:31199/coj");
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);
app.use("/api/v1", restRouter);
app.use(function(req, res) {
    // send index.html to start client side
    res.sendFile("index.html", { root: path.join(__dirname, '../public/') });
});


app.listen(3000, function(){
    console.log('App work on port 3000!')
})