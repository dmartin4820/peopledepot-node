"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var HOSTNAME = process.env.HOSTNAME;
var PORT = Number(process.env.PORT);
var app = express();
app.get('/', function (req, res) {
    console.log("hit the main route");
});
app.listen(PORT, function () {
    console.log("Example app listening on port http://".concat(HOSTNAME, ":").concat(PORT));
});
