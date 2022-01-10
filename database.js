const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/bookings-app", {
    useNewUrlParser: true
}).then(db => console.log("mongodb connected"))