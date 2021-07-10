const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: true,
        trim: true,
    },
    ProductCode: {
        type: String,
        required: true,
        trim: true,
    },
    Describe: {
        type: String,
        required: true,
        trim: true,
    },
    Price: {
        type: Number,
        required: true,
        min: 0,
    },
    Unit: {
        type: String,
        required: true,
        trim: true,
    },
    ImgLink: {
        type: String,
        trim: true,
    },
});

const Products = mongoose.model("Products", ProductSchema, "Products");

///
module.exports = Products;