var express = require('express');
var router = express.Router();

/// DATA
const mongoose = require("mongoose");
const Products = require('../models/Products');
const Product = require("../models/Products");

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getProduct);

async function getProduct(req, res) {
    var productlist = await Product.find({});
    console.log(productlist);
    res.render("product", { title: "Product Page", product: productlist });
}

/// - NEW --> Create
router.get("/new", getNewProduct);

function getNewProduct(req, res) {
    res.render("products/product-new", { title: "Create a New Product" });
}

/// - CRUD - C - Create / Post
router.post("/", createNewProduct);

function createNewProduct(req, res) {
    console.log(req.params);
    //console.log(req.body.Price);
    res.end(JSON.stringify(req.body));
    //res.render("product-new", { title: "Create a New Product" });
    let newProducts = new Products({
        ProductName: req.body.ProductName,
        ProductCode: req.body.ProductCode,
        Describe: req.body.Describe,
        Price: req.body.Price,
        Unit: req.body.Unit,
        ImgLink: req.body.ImgLink
    });
    newProducts.save();
}


/// - reEDIT --> Update
router.get("/edit", getEditProduct);

function getEditProduct(req, res) {
    res.render("products/product-edit", { title: "Edit a Product" });
}

/// - CRUD - C - Edit / Post
router.post("/", editProduct);

function editProduct(req, res) {
    console.log(req.params);
    //console.log(req.body.Price);
    res.end(JSON.stringify(req.body));
    //res.render("product-edit", { title: "Edit a Product" });
    let newProducts = new Product({
        ProductName: req.body.ProductName,
        Price: req.body.Price,
        Unit: req.body.Unit,
    });
    newProducts.save();
}

/// - CRUD - U - Update / Put 
router.put("/:id", getUpdateProduct);

function getUpdateProduct(req, res) {
    res.render("products/product-update", { title: "Update a Product" });
}

router.post("/", updateProduct);

function updateProduct(req, res) {
    console.log(req.params);
    //console.log(req.body.Price);
    res.end(JSON.stringify(req.body));
    //res.render("product-new", { title: "Create a New Product" });
    let newProducts = new Product({
        ProductName: req.body.ProductName,
        ProductCode: req.body.ProductCode,
        Price: req.body.Price,
        ImgLink: req.body.ImgLink
    });
    newProducts.save();
}

/// - CRUD - D - Delete 
router.delete("/:id", deleteProduct);

function deleteProduct(req, res) {
    res.render("product-delete", { title: "Update a Product" });
}


/// --- EXports
module.exports = router;