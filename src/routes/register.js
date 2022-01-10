const express = require("express");
const router = express.Router();

router.get("/add/register", (req,res) => {
    res.render("registers/new")
})

router.post("/add/new", (req,res) => {
    const {product, quantity, total} = req.body;
    console.log(product)
    console.log(quantity)
    console.log(total)
    res.send("ok")
})

module.exports = router;