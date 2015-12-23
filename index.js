/**
 * Created by Saad Communication on 23-Dec-15.
 */
var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("expres-session");
var flash = require("connect-flash");

var route = require("./routes/index");

var app = express();

mongoose.connect("mongodb://localhost:27017/test");
app.set("port",process.env.PORT || 3000);

app.set("view engine" , "ejs");

app.use(bodyParser.urlencoded({extended : false}));

app.use(cookieParser());

app.use(session({
    secret              : "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX",
    resave              : true,
    saveUninitialized   : true
}));

app.use(flash());

app.use(routes);

app.listen(app.get("port"),function(){
    console.log("listening at: " + app.get("port"));
});



















