const { app } = require("../../app");
const request = require("supertest");
const {
  UPDATE_USER_BY_EMAIL_MUTATION_STRING,
  DELETE_USER_BY_EMAIL_MUTATION_STRING,
  ADD_USER_MUTATION_STRING
} = require("../graphql-mutation-strings/UserGQLMutationString");
const {
  GET_ALL_USERS_QUERY_STRING,
  GET_USER_BY_EMAIL_QUERY_STRING
} = require("../graphql-query-strings/UserGQLQueryStrings");

describe("Testing user gql end-point queries and mutations:", () => {
  describe("Testing get-all-users gql query", () => {
    it("It should return a status code 200", async () => {
      const response = await request(app).post("/graphql").send({ query: GET_ALL_USERS_QUERY_STRING });

      expect(response.status).toEqual(200);
    });
  });

  describe("Testing get user by email gql query:", () => {
    it("It should return a status code 200", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({ query: GET_USER_BY_EMAIL_QUERY_STRING, variables: { email: "dean@mock.com" } });

      expect(response.status).toEqual(200);
    });
  });
});
