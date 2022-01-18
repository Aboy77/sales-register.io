const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/users/singin", (req,res) => {
    res.render("users/singin")
})

router.get("/users/singup", (req,res) => {
    res.render("users/singup")
})

module.exports = router;