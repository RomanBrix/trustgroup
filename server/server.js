"use strict";
import express from 'express';
import cors from 'cors'
import path from 'path';
import https from "https";
import fs from 'fs';

import { botFastReply, botBigReply } from './bot.js';

const __dirname = path.resolve();
// console.log(path)
// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200
//   }
var corsOptions = {
    origin: 'site url',
    optionsSuccessStatus: 200
  }

const app = express()
const port = 1488

app.use(express.json());
app.use(cors(corsOptions))

  app.get('/', (req, res) => {
    // res.send('Slava ukraine')
    res.sendFile(path.join(__dirname, '/ap.html'));
    // botReply();
  })

//   app.post('/bot_anal', (req,res)=>{
//       console.log(req.body);
//       botReply()
//       res.json(true);
//   })
  app.post('/bot_anal', botFastReply)
  app.post('/bot_anal_v2', botBigReply)
  
//   app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })


const httpsServer = https.createServer({
    key: fs.readFileSync('./privkey.pem'),
    cert: fs.readFileSync('./cert.pem'),
  }, app);


  httpsServer.listen(port, () => {
    console.log('HTTPS Server running on port:' + port);
});