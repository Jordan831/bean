module.exports.create=(req,res)=>{
    var p = req.body;
  const { email,password } =req.body;
    res.json({
        "email":email,
        "password":password
    })
}

module.exports.login=(req,res)=>{
   
    res.json({
        "message":"login"
    })
}