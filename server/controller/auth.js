module.exports.create=(req,res)=>{
    var p = req.body;
console.log(p);
    res.json({
        "message":p
    })
}

module.exports.login=(req,res)=>{
   
    res.json({
        "message":"login"
    })
}