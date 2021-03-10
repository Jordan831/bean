const express= require('express');
const app = express();

app.get("/api",(req,res)=>{
    res.send("this is hosting homepage");
});


const port = process.env.PORT || 8000;
app.listen(port);