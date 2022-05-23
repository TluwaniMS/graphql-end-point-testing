const express = require("express");
const app = express();
const schema = require("./main-graph-schema");
const { graphqlHTTP } = require("express-graphql");
const { InternalServerErrorResponse } = require("./enumerators/internal-server-error-response");
const { UnknownRequestErrorResponse } = require("./enumerators/unknown-request-error-response");
const { userSyncHandler } = require("./middleware/userSynchronization");
const dotenv = require("dotenv");

dotenv.config();

app.use(userSyncHandler);
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    customFormatErrorFn: (error) => {
      let message;
      let statusCode;

      console.log(error);

      error.originalError
        ? ((message = InternalServerErrorResponse.message), (statusCode = InternalServerErrorResponse.statusCode))
        : ((message = UnknownRequestErrorResponse.message), (statusCode = UnknownRequestErrorResponse.statusCode));

      return { message: message, status: statusCode };
    }
  })
);

module.exports = { app };
