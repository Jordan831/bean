const express= require('express');
const app = express();
const bodyParser =require('body-parser');
const authRouter = require("./route/auth");

app.use(bodyParser.json())
app.use("/api",authRouter);
app.use(function (err, req, res, next) {
console.error(err.stack)
res.status(500).send('Something broke!')
})
const port = process.env.PORT || 8000;
app.listen(port);