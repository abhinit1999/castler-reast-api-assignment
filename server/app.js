const express = require("express");
const app = express();
require("./DB/conn")
const newUser = require("./Model/user");
const cors=require("cors");

const dotenv=require('dotenv');
app.use(express.json());
app.use(cors());

dotenv.config({path: './.env'})



const port = process.env.PORT || 3005;
app.get("/", (req, res) => res.send("Hello World!"));

// creating new records

app.post("/new-user",(req,res)=>
{
    const user = new newUser(req.body);
    user.save();
    res.send(user);
    console.log(`\n${user}\n new user's Data inserted !!!`)
})

// Get User Details

app.get("/user/details",async(req,res)=>
{

    const user = await newUser.find();
    
    res.send(user);
    console.log(`${user}`);
})

app.listen(port, () => console.log(`server runing at: ${port}`));
