const express = require("express");
const router=express.Router();
const Person = require('./../models/Person');
const {jwtAuthMiddleware,generateToken}= require('./../jwt');
//Profile routes
router.get('/profile',jwtAuthMiddleware,async(req,res)=>{
    try{
    const userData=req.user;
    console.log("User Data: ",userData);
    const userId=userData.id;
    const user= await Person.findById(userId);
    res.status(200).json({user});
    }catch(err){
        console.error(err);
        res.status(500).json({error:"Invalid server error"});
    }
})
router.get('/',jwtAuthMiddleware, async(req, res) => {
    try{const data = await Person.find();
    console.log("Data Fetched");
    res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
});
router.get('/:workType', async(req, res) => {try{
    const workType= req.params.workType;
    if(workType=='chef'|| workType=='waiter'|| workType=='manager'){
        const response = await Person.find({work:workType});
        console.log("Response Fetched");
        res.status(200).json(response);
    }else{
        res.status(404).json({error:'Invalid work.'})
    }}catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
});
//Login route
router.post('/login',async(req,res)=>{
    try{
        //Extract username and password from request body
        const{username,password}=req.body;
        //Find the user by username
        const user= await Person.findOne({username:username});
        //If user does not exist or password does not match, return error
        if(!user || !(await user.comparePassword(password))){
            return res.status(401).json({error: "invalid username or password"});
        }
        //generate token
        const payload={
            id: user.id,
            username: user.username
        }
        const token=generateToken(payload);
        //return token as a response
        res.json({token})
    }catch(err){
        console.error(err);
        res.status(500).json({error: "Internal server error"});
    }
})

router.post('/signup', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("✅ Data saved.");
        const payload= {
            id:response.id,
            username : response.username
        }
        console.log(JSON.stringify(payload));
        const token= generateToken(payload);
        console.log("Token is: ",token);
        res.status(200).json({response: response,token: token});
    } catch (err) {
        console.error("❌ Error while saving:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
router.put('/:id', async(req,res)=>{
    try{
        const personId= req.params.id;//Extract id from URL Parameter
        const updatedPersonData= req.body;//Updated data from person
        const response= await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new: true, //Return updated document
            runValidators: true //Run Mongooose validation
        })
        if(!response){
            return res.status(404).json({error:"Person not found"});
        }
        console.log('Data updated');
        res.status(200).json(response);
    }catch(err){
        console.error("❌ Error while saving:", err);
        res.status(500).json({ error: "Internal server error" });
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const personId= req.params.id;
        const response= await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:"Person not found"});
        }
        res.status(200).json({ message: "Person Deleted Successfully" });

    }catch(err){
        console.error("❌ Error while saving:", err);
        res.status(500).json({ error: "Internal server error" });
    }
})
module.exports= router;