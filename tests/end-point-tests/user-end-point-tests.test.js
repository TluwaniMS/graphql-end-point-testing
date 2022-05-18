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
const { UserObjectMatcher } = require("../object-matchers/UserObjectMatchers");

describe("Testing user gql end-point queries and mutations:", () => {
  describe("Testing get-all-users gql query", () => {
    it("It should return a status code 200", async () => {
      const response = await request(app).post("/graphql").send({ query: GET_ALL_USERS_QUERY_STRING });

      expect(response.status).toEqual(200);
    });

    it("It should return an array with 25 elements", async () => {
      const response = await request(app).post("/graphql").send({ query: GET_ALL_USERS_QUERY_STRING });

      expect(response.body.data.getAllUsers).toHaveLength(25);
    });

    it("It should return an array with 25 elements", async () => {
      const response = await request(app).post("/graphql").send({ query: GET_ALL_USERS_QUERY_STRING });

      expect(response.body.data.getAllUsers).toEqual(
        expect.arrayContaining([expect.objectContaining(UserObjectMatcher)])
      );
    });
  });

  describe("Testing get user by email gql query:", () => {
    it("It should return a status code 200", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({ query: GET_USER_BY_EMAIL_QUERY_STRING, variables: { email: "dean@mock.com" } });

      expect(response.status).toEqual(200);
    });

    it("It should return a status code 200", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({ query: GET_USER_BY_EMAIL_QUERY_STRING, variables: { email: "dean@mock.com" } });

      expect(response.body.data.getUserByEmail).toEqual(expect.objectContaining(UserObjectMatcher));
    });

    it("It should return a status code 200", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({ query: GET_USER_BY_EMAIL_QUERY_STRING, variables: { email: "dean@mock.com" } });

      expect(response.body.data.getUserByEmail).toHaveProperty("firstName", "Dean");
    });
  });

  describe("Testing delete user by email mutation", () => {
    it("It should return a status code 200", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({ query: DELETE_USER_BY_EMAIL_MUTATION_STRING, variables: { email: "dean@mock.com" } });

      expect(response.status).toEqual(200);
    });

    it("It should return the message specified", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({ query: DELETE_USER_BY_EMAIL_MUTATION_STRING, variables: { email: "dean@mock.com" } });

      expect(response.body.data.deleteUserByEmail).toEqual("User has been successfuly deleted.");
    });
  });

  describe("Testing add user mutation", () => {
    it("It should return a status code 200", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({
          query: ADD_USER_MUTATION_STRING,
          variables: { email: "roger@mock.com", firstName: "Roger", lastName: "Skhosana" }
        });

      expect(response.status).toEqual(200);
    });

    it("It should return the message specified", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({
          query: ADD_USER_MUTATION_STRING,
          variables: { email: "roger@mock.com", firstName: "Roger", lastName: "Skhosana" }
        });

      expect(response.body.data.addUser).toEqual(`User with name Roger has been created successfully`);
    });
  });

  describe("Testing update user mutation", () => {
    it("It should return a status code 200", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({
          query: UPDATE_USER_BY_EMAIL_MUTATION_STRING,
          variables: { email: "lufuno@mock.com", firstName: "Lerato", lastName: "Skhosana" }
        });

      expect(response.status).toEqual(200);
    });

    it("It should return the message specified", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({
          query: UPDATE_USER_BY_EMAIL_MUTATION_STRING,
          variables: { email: "lufuno@mock.com", firstName: "Lerato", lastName: "Skhosana" }
        });

      expect(response.body.data.updateUserByEmail).toEqual("User has been updated successfuly.");
    });
  });
});
