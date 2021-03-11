module.exports.create=(req,res)=>{
    var json = req.body;
    res.json({
        "message":json
    })
}

module.exports.login=(req,res)=>{
   
    res.json({
        "message":"login"
    })
}