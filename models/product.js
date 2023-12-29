const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
});

var Product = mongoose.model("Product", productSchema);

module.exports = Product;