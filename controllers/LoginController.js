var express = require('express');
var router = express.Router();

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getLogin);

function getLogin(req, res) {
    res.render("login", { title: "Login Page" });
    //res.sendFile(__dirname + "/view/login.html");
}


/// --- EXports
module.exports = router;