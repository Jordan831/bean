const express= require('express');
const app = express();

app.get("/api",(req,res)=>{
    res.send("finally i solved problem and working on private network");
});


const port = process.env.PORT || 8000;
app.listen(port);