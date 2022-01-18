const express = require("express");
const router = express.Router();
const Register = require("../models/Register");

router.get("/add/register", (req,res) => {
    res.render("registers/new")
})

router.post("/add/new", async(req,res) => {
    const {product, quantity, total} = req.body;
    let error = [];
    if(product == "" || product == null) {
        error.push({text: "El campo de producto esta vacio"})
    }
    if(quantity == "" || quantity == null) {
        error.push({text: "El campo de precio esta vacio"})
    }
    if(total == "" || total == null) {
        error.push({text: "El campo total esta vacio"})
    }

    if(error.length > 0) {
        res.render("registers/new", {
            error
        })
    } else {
        error = [];
        const newRegister = new Register({product, quantity, total});
        await newRegister.save();
        req.flash("success_msg", "Guardado exitosamente")
        res.redirect("/")
    }
})

router.get("/data/delete/:id", async(req,res) => {
    await Register.findByIdAndDelete(req.params.id)
    req.flash("success_msg", "Eliminado exitosamente")
    res.redirect("/")
})

module.exports = router;