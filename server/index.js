const express= require('express');
const app = express();

app.get("/api",(req,res)=>{
    res.send("this is next gen  homepage");
});


const port = process.env.PORT || 8000;
app.listen(port);