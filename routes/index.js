/**
 * Created by Inzi on 12/23/2015.
 */
var express = require("express");
var User = require("../models/user");
var api = express.Router();

api.use(function(req,res,next){
    res.locals.currentUser  = req.user;
    res.locals.error        = req.flash("error");
    res.locals.infos        = req.flash("info");
    next();
});

api.get("/",function(){
   User.find()
       .sort({createdAt : "desending"})
       .exec(function(err, users){
           if(err){
               return next(err);
           }
           res.render("index" , {user : users});
       })
});

module.exports = api;





module.exports = api;