/**
 * Created by Saad Communication on 23-Dec-15.
 */
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var bcryptSaltLevel = 10;

var userSchema = mongoose.Schema({
    username    : {type:String, required:true, unique:true},
    password    : {type:String , required:true},
    createdAt   : {type:Date, default:Date.now},
    displayName : String,
    bio         : String
});

userSchema.methods.name = function(){
    return this.displayName || this.username;
};

var noop = function(){};

userSchema.pre("save",function(done){
    var user = this;
    if(!user.isModified()){
        return done();
    }

    bcrypt.genSalt(bcryptSaltLevel , function(err,salt){
       if(err){
           return done(err);
       }
        bcrypt.hash(user.pasword , salt , noop , function(err , hashedPassword){
            if(err){
                done(err);
            }
            user.password = hashedPassword;
            done();
        });
    });
});

userSchema.checkPassword = function(guess,done){
    bcrypt.compare(guess, this.password, function (err , isMatch) {
        done(err , isMatch);
    })
};

var User = mongoose.model("user", userSchema);
module.exports = User;





