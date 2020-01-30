var assert = require("assert");
var mongoose = require('mongoose');

// model

var schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    dob: Date,
    address: String,
    phone: String,
    role: String
});
var _user = new mongoose.model('User', schema);
//model

//config 

var mongoose = require('mongoose');
var user = mongoose.model('User');

var url = 'mongodb://localhost/crud01';

// Make Mongoose use `findOneAndUpdate()`. 
// Note that this option is `true` by default,
// you need to set it to false.
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Connection establishment
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


// config

// read

var query = {
    username: "abc@example.com"
};

var service = {
    findUser: function (query, callback){
        return user.findOne(query, callback);
    },
    foo: bar
};

var bar = service.findUser(query, function (error, response) {
    if (error) {
        console.log(error);
        return;
    }
    if (!response) {
        console.log('No Data Found');
    }
    console.log("foi");
    return;
});