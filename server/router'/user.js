const express = require("express");
const router= express.Router();
const {
   
    Create
}= require("../controller/user")
   



router.post("/create", Create)
module.exports = router