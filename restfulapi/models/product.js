const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    add: String,
    remove: String,
    view: string,
    slug: {
        type: String,
        lowercase: true,
    }
});

var Product = mongoose.model("Product", productSchema);

module.exports = Product;