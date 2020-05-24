import express from "express";
import compression from "compression";
import cors from "cors";
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema/index";
import expressPlayGround from "graphql-playground-middleware-express";

const app = express();

app.use("*", cors());
app.use(compression());

const servidor = new ApolloServer({
  schema,
  introspection: true,
});
servidor.applyMiddleware({ app });

app.get(
  "/",
  expressPlayGround({
    endpoint: "/graphql",
  })
);

const PORT = "5300";

const httpServer = createServer(app);
httpServer.listen({ port: PORT }, () =>
  console.log(
    `Hola mundo api GraphQL ejecutando por la url http://localhost:${PORT}`
  )
);
