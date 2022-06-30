import {Express, NextFunction, Response, Request } from "express"
import routes from "./src/5-presentation/webapi/routes";
const dotenv = require('dotenv');
const express = require('express');


dotenv.config();
const app: Express = express();

// bodyparser
app.use(express.json());

app.use(routes)

// === BOILERPLATE ===
// Catch and send error messages
app.use( (err: any, req: Request, res:Response, next: NextFunction) => {
  if (err) {
    console.error(err.message)
    if (!err.statusCode) {
      err.statusCode = 500
    } // Set 500 server code error if statuscode not set
    return res.status(err.statusCode).send({
      statusCode: err.statusCode,
      message: err.message
    })
  }

  next()
})

// 404
app.use((err: any, req: Request, res:Response, next: NextFunction) => {
  res.status(404).json({
    status: 'Page does not exist'
  });
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
})