const mongoose = require("mongoose");
const {Schema} = mongoose;

const newSchema = new Schema({
    product: {type: String, required: true},
    quantity: {type: Number, required: true},
    total: {type: Number, required: true},
    date: {type: Date, default: Date.now}
})

module.exports = mongoose.model("Note", newSchema)