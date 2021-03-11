const express = require('express');
const {create ,login} = require("../controller/auth");
const app = express.Router();
app.post("/register",create);
app.get("/login",login);


module.exports= app;