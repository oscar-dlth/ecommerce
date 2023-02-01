import {Express, NextFunction, Response, Request } from "express"
import routes from "./routes";
import jwt from "../../4-infrastructure/identity/JWT/middleware/check-auth";
const dotenv = require('dotenv');
const express = require('express');


dotenv.config();
const app: Express = express();

//app.use(jwt);
app.use(express.json());
app.use(routes)

app.use( (err: any, req: Request, res:Response, next: NextFunction) => {
  if (err) {

    console.error(err.message)

    if (!err.code) {

      err.code = 500;

    } 

    res.status(err.code).json({

      status: 'Fail',
      message: err.message

    })
  }

  next()
})

app.use((err: any, req: Request, res:Response, next: NextFunction) => {

  res.status(404).json({
    status: 'Page does not exist'
  });
  
});

export default app;