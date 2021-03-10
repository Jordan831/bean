const express= require('express');
const app = express();


app.get("/",(req,res,next)=>{
    try
    {
    const p=0;
    p=1;
    res.send("finally i solved problem and working on private network");
    }
    catch(err)
    {
        next(err);
    }
});
app.get("/api",(req,res)=>{
    
    res.send("finally i solved problem and working on private network");
});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
const port = process.env.PORT || 8000;
app.listen(port);