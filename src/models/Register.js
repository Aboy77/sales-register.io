const mongoose = require("mongoose");
const {Schema} = mongoose;

let day = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

let date = `${day}/${month}/${year}`

const newSchema = new Schema({
    product: {type: String, required: true},
    quantity: {type: Number, required: true},
    total: {type: Number, required: true},
    date: {type: String, default: date}
})

module.exports = mongoose.model("Note", newSchema)