const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post("/createuser",async (req, res)=>{
    try{
       await User.create({
            name : "Shreya",
            password : "12345",
            email : "shreya12@hotmail.com",
            location : "Delhi"
        })
        res.json({success:true});
    }catch {error} {
        console.log(error)
        res.json({success:false});
    }
})

module.exports = router;