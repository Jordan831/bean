module.exports.create=(req,res)=>{
    var json = req.body;
    res.json({
        "message":json
    })
}