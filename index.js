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

var route = require("./routes");


var app = express();

mongoose.connect("mongodb://localhost:27017/test");
app.set("port",process.env.PORT || 3000);
