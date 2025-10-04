import express from "express";
import {client} from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.post("/signup",async (req,res)=>{
    const {username,password} = req.body;
    const user = await client.user.create({
        data:{
            username:username,
            password:password
        }
    });
    res.status(201).json({
        message:"SignUp Successful",
        id:user.id
    });
});

app.listen(3002,()=>{console.log("Server is listening on PORT:3002")});