import { NextFunction, Response, Request } from "express"
import express from 'express'
import bodyParser from 'body-parser'
const app = express()
import routes from './routes'
import dotenv from 'dotenv';


dotenv.config();

// bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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