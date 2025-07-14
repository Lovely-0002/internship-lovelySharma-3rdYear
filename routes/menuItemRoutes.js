const express = require("express");
const router=express.Router();
const MenuItem = require('./../models/MenuItem');
router.get('/', async(req, res) => {
    try{const data = await MenuItem.find();
    console.log("Data Fetched");
    res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
});
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log("✅ Data saved.");
        res.status(201).json(response);
    } catch (err) {
        console.error("❌ Error while saving:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
module.exports= router;