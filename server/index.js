const express= require('express');
const app = express();
const bodyParser =require('body-parser');
const authRouter = require("./route/auth");
const morgan = require('morgan');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use("/api",authRouter);

app.use(function (err, req, res, next) {
console.error(err.stack)
res.status(500).send('Something broke!')
})


const port = process.env.PORT || 9000;
app.listen(port);