import express, { Application, Request, Response } from "express";
import * as t from '../module';
// import { IGetUserAuthInfoRequest } from "../index";
// import {Wow} from './module';
// Wow()
const app: Application = express();
let a:t.A = {};
a.a = "hi";
console.log(a)


app.use((req:any , res, next) => {
  req.user = "wow";
  next();
});

app.get("/", (req:any, res) => {
  console.log(req.user);
  res.send("wow");
});


app.listen(3000, () => {
  console.log("wow");
});

