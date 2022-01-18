const express = require("express");
const router = express.Router();
const Register = require("../models/Register");

router.get("/", async(req,res) => {
    const data = await Register.find({}).lean().sort({_id: "desc"});
    console.log(data)
    res.render("index", {
        data
    })
})


router.get("/about", (req,res) => {
    res.render("about")
})

module.exports = router;