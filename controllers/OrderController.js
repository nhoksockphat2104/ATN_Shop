var express = require('express');
var router = express.Router();

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getOrder);

function getOrder(req, res) {
    res.render("order", { title: "Order Page" });
}

/// --- EXports
module.exports = router;