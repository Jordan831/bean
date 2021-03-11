module.exports.create=(req,res)=>{
    var p = req.body;
  const { email,password } =req.boy;
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