const express= require("express");
const User = require("../model/users");
require("dotenv").config()


exports.Create = async (req, res) => {
  try {
    
    const {
      id,
      name,
      username,
      email,
      street,
      suite,
      city,
      zipcode,
      lat,
      lng


      
      
      
    } = req.body
    

   console.log("req body",req.body); 
    if (
      !name||
      !email ||
      !username ||
      !id||
      !street
     
      
    ) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      })
    }
    
    

    
    // const existingUser = await User.findOne({ email })
    // if (existingUser) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "User already exists. Please sign in to continue.",
    //   })
    // }

    
   
  

   

   
    const user = await User.create({
        id,
        name,
        username,
        email,
        street,
        suite,
        city,
        zipcode,
        lat,
        lng
     
     
     
      
    })

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully",
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    })
  }
}
