const express = require("express");
const expressSession = require("express-session");
const path = require("path");
//const bodyParser = require("body-parser");
var hbs = require('hbs');

//--------- Connect DB (MongoDB, FireBase, ...)
const mongoose = require("mongoose");
const dbConnect = require("./libs/dbconnect");
dbConnect.connectDB(dbConnect.xURL);

//--------- Server INITialization
const app = express();

//-----------------------------------
// Cấu hình thư viện + Data
//-----------------------------------
xPORT = process.env.PORT || 3000;


// Cấu hình MVC + Engine - View
app.set("views", path.join(__dirname, "views")); //setting views directory for views.
app.set("view engine", "hbs"); //setting view engine as handlebars

hbs.registerPartials(__dirname + '/views/partials');

// khai báo tới thư mục Static / Public
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.static(__dirname + '/public'));

//-----------------------------------
// ROUTING tới các chức năng
//-----------------------------------
const Router = express.Router();

// --------- filter Request
app.use(
    (req, res, next) => {
        console.log("\n\n----------------\n TIME: ", Date.now());
        console.log("\n URL: ", req.url);
        console.log("\n QUERY: ", req.query);
        next();
    }
);

// --------- ERROR Handle
app.use(
    (err, req, res, next) => {
        console.log("\n ERR: ", Date.now());
        res.status(500).send("WEB Broken !");
    }
);

// --------- Home
Router.get("/", getHome);
Router.get("/home", getHome);

function getHome(req, res) {
    let peopleList = ["Id", "Product Name", "Price"];
    res.render("Home", { people: peopleList, title: "Home Page" });
    //res.sendFile(__dirname + "/view/home.html");
}


// --------- Product
const ProductController = require("./controllers/ProductController");
app.use("/product", ProductController);

// --------- Order
const OrderController = require("./controllers/OrderController");
app.use("/order", OrderController);

// --------- Login
const LoginController = require("./controllers/LoginController");
app.use("/login", LoginController);

// --------- Register
const RegisterController = require("./controllers/RegisterController");
app.use("/register", RegisterController);



//-----------------------------------
// Sử dụng Middleware (LIB) cho WEB
//-----------------------------------
app.use("/", Router);

//app.use(bodyParser.json());

app.use(expressSession({
    secret: "HVPhat-Cloud",
    resave: true,
    saveUninitialized: true,
    maxAge: 3600000
}));

//-----------------------------------
// Mở WEB tại xPORT
//-----------------------------------
app.listen(xPORT);

console.log("\n WEB tại PORT: ", xPORT);