const express = require("express");

const router = express.Router();


router.get("/",(req,res) => {
    console.log("hii users");
    res.send("welcome to account page");
})


module.exports = router;