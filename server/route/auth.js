const express = require('express');
const {create } = require("../controller/auth");
const app = express.Router();
app.post("/register",create);

module.exports= app;