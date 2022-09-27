const mongoose  =require("mongoose");
const dotenv=require('dotenv');


dotenv.config({path: './.env'})
const DB = process.env.DB_URL;
mongoose.connect(DB)
.then(()=>
{
    console.log("Connectes To mongoDB");
}).catch((e)=>
{
    console.log(e)
})