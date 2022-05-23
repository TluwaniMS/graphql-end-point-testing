const { app } = require("../../../app");
const request = require("supertest");
const { InternalServerErrorResponse } = require("../../../enumerators/internal-server-error-response");
const { UnknownRequestErrorResponse } = require("../../../enumerators/unknown-request-error-response");
const {
  GET_USER_BY_EMAIL_QUERY_STRING_TO_TRIGGER_MIDDLEWARE_UNKNOWN_REQUEST,
  GET_MULTIPLE_USERS_BY_EMAIL_INTERNAL_SERVER_ERROR_TRIGGER_QUERY_STRING,
  GET_ALL_USERS_QUERY_STRING
} = require("../graphql-query-strings/UserGQLQueryStrings");
const {
  userUsedForByEmailQueries,
  arrayOfUserEmails,
  totalNumberOfUsers,
  jwtExistantUserPayLoadData
} = require("../integration-testing-sample-data/user-testing-sample-data");

const { getAllUsers, getUserByEmail, deleteUserByEmail } = require("../../../services/resolver-services");

const nonExistantUserToken = process.env.NON_EXISTANT_USER_TOKEN;
const existingUserToken = process.env.EXISTING_USER_TOKEN;

describe("Testing error-handling middleware", () => {
  describe("Testing unknown request error middleware error handling", () => {
    it(`It should return a status code ${UnknownRequestErrorResponse.statusCode}`, async () => {
      const response = await request(app)
        .post("/graphql")
        .set("Authorization", `Bearer ${existingUserToken}`)
        .send({
          query: GET_USER_BY_EMAIL_QUERY_STRING_TO_TRIGGER_MIDDLEWARE_UNKNOWN_REQUEST,
          variables: { email: userUsedForByEmailQueries.email }
        });

      expect(response.status).toEqual(UnknownRequestErrorResponse.statusCode);
    });

    it("It should return the message specified", async () => {
      const response = await request(app)
        .post("/graphql")
        .set("Authorization", `Bearer ${existingUserToken}`)
        .send({
          query: GET_USER_BY_EMAIL_QUERY_STRING_TO_TRIGGER_MIDDLEWARE_UNKNOWN_REQUEST,
          variables: { email: userUsedForByEmailQueries.email }
        });

      expect(response.body.errors[0].message).toEqual(UnknownRequestErrorResponse.message);
    });
  });

  describe("Testing internal server error middleware error handling", () => {
    it(`It should return a status code ${InternalServerErrorResponse.statusCode}`, async () => {
      const response = await request(app)
        .post("/graphql")
        .set("Authorization", `Bearer ${existingUserToken}`)
        .send({
          query: GET_MULTIPLE_USERS_BY_EMAIL_INTERNAL_SERVER_ERROR_TRIGGER_QUERY_STRING,
          variables: { arrayOfEmails: arrayOfUserEmails }
        });

      expect(response.body.errors[0].status).toEqual(InternalServerErrorResponse.statusCode);
    });

    it("It should return the message specified", async () => {
      const response = await request(app)
        .post("/graphql")
        .set("Authorization", `Bearer ${existingUserToken}`)
        .send({
          query: GET_MULTIPLE_USERS_BY_EMAIL_INTERNAL_SERVER_ERROR_TRIGGER_QUERY_STRING,
          variables: { arrayOfEmails: arrayOfUserEmails }
        });

      expect(response.body.errors[0].message).toEqual(InternalServerErrorResponse.message);
    });
  });

  describe("Testing user synchronization middleware", () => {
    beforeAll(async () => {
      await request(app)
        .post("/graphql")
        .set("Authorization", `Bearer ${nonExistantUserToken}`)
        .send({ query: GET_ALL_USERS_QUERY_STRING });
    });

    afterAll(() => {
      deleteUserByEmail(jwtExistantUserPayLoadData.email);
    });

    it(`It should return an array with ${totalNumberOfUsers + 1} elements`, () => {
      const users = getAllUsers();

      expect(users).toHaveLength(totalNumberOfUsers + 1);
    });

    it("It should return an object that has the property specified", () => {
      const user = getUserByEmail(jwtExistantUserPayLoadData.email);

      expect(user).toHaveProperty("firstName", jwtExistantUserPayLoadData.firstName);
    });
  });
});
