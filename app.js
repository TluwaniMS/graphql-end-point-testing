const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./main-graph-schema");
const app = express();

app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true }));

module.exports = { app };
