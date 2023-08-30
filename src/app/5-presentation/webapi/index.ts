import {Express, NextFunction, Response, Request } from "express"
import router from "./routes";
import { initBrandiContainer } from "@dependency-inyection/initBrandiContainer";
const dotenv = require('dotenv');
const express = require('express');

dotenv.config();
const app: Express = express();

//app.use(jwt);
app.use(express.json());
app.use(router)

app.use( (err: any, req: Request, res: Response, next: NextFunction) => {
  if(!err){
    next();
  }
  
  if (!err.code) {
    err.code = 500;
  }

  if( err?.message.includes('connect ECONNREFUSED')){
    err.message = 'connect ECONNREFUSED';
  }

  res.status(err.code).json({
    status: 'Fail',
    message: err.message
  })
})


app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    status: 'route does not exist'
  });
});

initBrandiContainer();

export default app;