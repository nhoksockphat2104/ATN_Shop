var express = require('express');
var router = express.Router();



/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getRegister);


function getRegister(req, res) {
    res.render("register", { title: "Register Page" });
    //res.sendFile(__dirname + "/view/logout.html");
}

/// --- EXports
module.exports = router;