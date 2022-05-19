const { app } = require("../../../app");
const request = require("supertest");
const {
  UPDATE_USER_BY_EMAIL_MUTATION_STRING,
  DELETE_USER_BY_EMAIL_MUTATION_STRING,
  ADD_USER_MUTATION_STRING
} = require("../graphql-mutation-strings/UserGQLMutationString");
const {
  GET_ALL_USERS_QUERY_STRING,
  GET_USER_BY_EMAIL_QUERY_STRING,
  GET_MULTIPLE_USERS_BY_EMAIL_QUERY_STRING
} = require("../graphql-query-strings/UserGQLQueryStrings");
const {
  userUsedForByEmailQueries,
  userDataForUpdates,
  defaultUserDataForUpdates,
  arrayOfUserEmails,
  totalNumberOfUsers,
  totalNumberOfUsersTobeReturnedByEmailsQuery,
  sampleUser
} = require("../integration-testing-sample-data/user-testing-sample-data");
const { UserObjectMatcher } = require("../../object-matchers/UserObjectMatchers");
const { OperationalSupportMessages } = require("../../../enumerators/operational-support-mesages");

describe("Testing user gql end-point queries and mutations:", () => {
  describe("Testing get-all-users gql query", () => {
    it("It should return a status code 200", async () => {
      const response = await request(app).post("/graphql").send({ query: GET_ALL_USERS_QUERY_STRING });

      expect(response.status).toEqual(200);
    });

    it("It should return an array with 25 elements", async () => {
      const response = await request(app).post("/graphql").send({ query: GET_ALL_USERS_QUERY_STRING });

      expect(response.body.data.getAllUsers).toHaveLength(totalNumberOfUsers);
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
        .send({ query: GET_USER_BY_EMAIL_QUERY_STRING, variables: { email: userUsedForByEmailQueries.email } });

      expect(response.status).toEqual(200);
    });

    it("It should return a status code 200", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({ query: GET_USER_BY_EMAIL_QUERY_STRING, variables: { email: userUsedForByEmailQueries.email } });

      expect(response.body.data.getUserByEmail).toEqual(expect.objectContaining(UserObjectMatcher));
    });

    it("It should return a status code 200", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({ query: GET_USER_BY_EMAIL_QUERY_STRING, variables: { email: userUsedForByEmailQueries.email } });

      expect(response.body.data.getUserByEmail).toHaveProperty("firstName", userUsedForByEmailQueries.firstName);
    });
  });

  describe("Testing delete user by email mutation", () => {
    it("It should return a status code 200", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({ query: DELETE_USER_BY_EMAIL_MUTATION_STRING, variables: { email: userUsedForByEmailQueries.email } });

      expect(response.status).toEqual(200);
    });

    it("It should return the message specified", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({ query: DELETE_USER_BY_EMAIL_MUTATION_STRING, variables: { email: userUsedForByEmailQueries.email } });

      expect(response.body.data.deleteUserByEmail).toEqual(OperationalSupportMessages.DeletionResponseMessage);
    });
  });

  describe("Testing add user mutation", () => {
    it("It should return a status code 200", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({
          query: ADD_USER_MUTATION_STRING,
          variables: { userObject: sampleUser }
        });

      expect(response.status).toEqual(200);
    });

    it("It should return the message specified", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({
          query: ADD_USER_MUTATION_STRING,
          variables: { userObject: sampleUser }
        });

      expect(response.body.data.addUser).toEqual(
        OperationalSupportMessages.CreationResponseMessage(sampleUser.firstName)
      );
    });
  });

  describe("Testing update user mutation", () => {
    it("It should return a status code 200", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({
          query: UPDATE_USER_BY_EMAIL_MUTATION_STRING,
          variables: { userObject: userDataForUpdates }
        });

      expect(response.status).toEqual(200);
    });

    it("It should return the message specified", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({
          query: UPDATE_USER_BY_EMAIL_MUTATION_STRING,
          variables: { userObject: userDataForUpdates }
        });

      expect(response.body.data.updateUserByEmail).toEqual(OperationalSupportMessages.UpdateResponseMessage);
    });
  });

  describe("Testing get users by emails gql query", () => {
    it("It should return a status code 200", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({
          query: GET_MULTIPLE_USERS_BY_EMAIL_QUERY_STRING,
          variables: { arrayOfEmails: arrayOfUserEmails }
        });

      expect(response.status).toEqual(200);
    });

    it("It should return an array with 3 elements", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({
          query: GET_MULTIPLE_USERS_BY_EMAIL_QUERY_STRING,
          variables: { arrayOfEmails: arrayOfUserEmails }
        });

      expect(response.body.data.getMultipleUsersByEmail).toHaveLength(totalNumberOfUsersTobeReturnedByEmailsQuery);
    });

    it("It should return an array with objects that match the specified object", async () => {
      const response = await request(app)
        .post("/graphql")
        .send({
          query: GET_MULTIPLE_USERS_BY_EMAIL_QUERY_STRING,
          variables: { arrayOfEmails: arrayOfUserEmails }
        });

      expect(response.body.data.getMultipleUsersByEmail).toEqual(
        expect.arrayContaining([expect.objectContaining(UserObjectMatcher)])
      );
    });
  });
});
