import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';

const app = express();

app.use("*", cors());
app.use(compression());

app.get('/', (req, res)=>{
    res.send('Bienvenido al curso de GraphQL.');
});

const PORT = "5300";

const httpServer = createServer(app);
httpServer.listen({ port: PORT }, () =>
  console.log(
    `Hola mundo api GraphQL ejecutando por la url http://localhost:${PORT}`
  )
);

//console.log("Bienvenido a la Academia Online");