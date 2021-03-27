"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
// import { IGetUserAuthInfoRequest } from "../index";
// import {Wow} from './module';
// Wow()
var app = express_1["default"]();
var a = {};
a.a = "hi";
console.log(a);
app.use(function (req, res, next) {
    req.user = "wow";
    next();
});
app.get("/", function (req, res) {
    console.log(req.user);
    res.send("wow");
});
app.listen(3000, function () {
    console.log("wow");
});
