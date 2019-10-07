const express = require("express");
const path = require("path");
const apiMocker = require("mocker-api");

const app = express();

apiMocker(app, path.resolve("./mocker/index.js"));
app.listen(5000);
