const { app } = require("../../../app");
const request = require("supertest");
const { InternalServerErrorResponse } = require("../../../enumerators/internal-server-error-response");
const { UnknownRequestErrorResponse } = require("../../../enumerators/unknown-request-error-response");
const {
  GET_USER_BY_EMAIL_QUERY_STRING_TO_TRIGGER_MIDDLEWARE_UNKNOWN_REQUEST,
  GET_MULTIPLE_USERS_BY_EMAIL_INTERNAL_SERVER_ERROR_TRIGGER_QUERY_STRING
} = require("../graphql-query-strings/UserGQLQueryStrings");

describe("Testing error-handling middleware", () => {
  describe("Testing unknown request error middleware error handling", () => {
    it(`It should return a status code ${UnknownRequestErrorResponse.statusCode}`, async () => {
      const response = await request(app)
        .post("/graphql")
        .send({
          query: GET_USER_BY_EMAIL_QUERY_STRING_TO_TRIGGER_MIDDLEWARE_UNKNOWN_REQUEST,
          variables: { email: "thoka@mock.com" }
        });

      expect(response.status).toEqual(UnknownRequestErrorResponse.statusCode);
    });

    it("It should return the message specified", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({
          query: GET_USER_BY_EMAIL_QUERY_STRING_TO_TRIGGER_MIDDLEWARE_UNKNOWN_REQUEST,
          variables: { email: "thoka@mock.com" }
        });

      expect(response.body.errors[0].message).toEqual(UnknownRequestErrorResponse.message);
    });
  });

  describe("Testing internal server error middleware error handling", () => {
    it(`It should return a status code ${InternalServerErrorResponse.statusCode}`, async () => {
      const response = await request(app)
        .post("/graphql")
        .send({
          query: GET_MULTIPLE_USERS_BY_EMAIL_INTERNAL_SERVER_ERROR_TRIGGER_QUERY_STRING,
          variables: { arrayOfEmails: [] }
        });

      expect(response.status).toEqual(InternalServerErrorResponse.statusCode);
    });

    it("It should return the message specified", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({
          query: GET_MULTIPLE_USERS_BY_EMAIL_INTERNAL_SERVER_ERROR_TRIGGER_QUERY_STRING,
          variables: { arrayOfEmails: ["thoka@mock.com"] }
        });

      expect(response.body.errors[0].message).toEqual(InternalServerErrorResponse.message);
    });
  });
});
