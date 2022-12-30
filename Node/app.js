const express= require ("express");
const app=express();
const mongoose= require ("mongoose");
app.use(express.json());
const cors=require("cors");
app.use(cors());
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const JWT_SECRET="ihjikas567tgbnnmkjd0w-idjncncn[]cjdijccn71863282dnj3i2ie2";


//copy the url from momgoatlas
const mongoUrl="mongodb+srv://IshikaKhandelwal:ishika111@cluster0.ogh4pre.mongodb.net/?retryWrites=true&w=majority";
mongoose
.connect(mongoUrl,{
    useNewUrlParser:true,
})
.then(()=>{
    console.log(" Connected to database");
})
.catch((e)=>console.log(e));

//we are making api sending and accept the response
// app.post("/post",async(req,res)=>{
//     console.log(req.body);
//     const {data}=req.body;
//     try {
//         if(data=="ishika"){
//             //sending the response
//             res.send({status:"ok"});
    
//         }else{
//             res.send({status:"User not found"});
//         }
        
//     } catch (error) {
//         res.send({status:`error`});
        
//     }
    
// });
require("./userDetails");
const User=mongoose.model("UserInfo");
app.post("/register",async(req,res)=>{
    const{fname,lname,email,password}=req.body;
    const encrptedPassword=await bcrypt.hash(password,10);
    try {
        const oldUser=await User.findOne({email});
        if(oldUser){
            return res.send({error:"User Exist"});
        }
       await User.create({
           fname,
           lname,
           email,
           password:encrptedPassword,

       });
       res.send({status:"OK"});
        
    } catch (error) {
        res.send({status:`error`});
        
    }
    
});
//creating login api
app.post("/login-user",async(req,res)=>{
    const{email,password}=req.body;
    const user=await User.findOne({email});
    if(!user){
        return res.json({error:"User Not Found"});
    }
    if(await bcrypt.compare(password,user.password)){
        //create a token if user sucessfully loggedin
        const token=jwt.sign({},JWT_SECRET);
        //handle it
        if(res.status(201)){
            return res.json({status:"Ok",data:token});
        }else{
            return res.json({status:"error"});
        }
    }
    res.json({status:"error",error:"Invalid Password"});
});
app.listen(5000,()=>{
    console.log("Server started");
})