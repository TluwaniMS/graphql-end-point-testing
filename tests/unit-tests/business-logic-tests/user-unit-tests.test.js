const {
  getAllUsers,
  getMultipleUsersByEmail,
  getUserByEmail,
  addUser,
  deleteUserByEmail,
  updateUser
} = require("../../../services/resolver-services");
const { UserObjectMatcher } = require("../../object-matchers/UserObjectMatchers");
const {
  userUsedForByEmailQueries,
  userDataForUpdates,
  defaultUserDataForUpdates,
  arrayOfUserEmails,
  totalNumberOfUsers,
  totalNumberOfUsersTobeReturnedByEmailsQuery,
  sampleUser
} = require("../business-logic-testing-sample-data/user-testing-sample-data");

describe("Testing application business logic", () => {
  describe("Testing get all users resolver", () => {
    it(`It should return an array with ${totalNumberOfUsers} elements`, async () => {
      const users = getAllUsers();

      expect(users).toHaveLength(totalNumberOfUsers);
    });

    it(`It should return an array with objects that match the specified object`, async () => {
      const users = getAllUsers();

      expect(users).toEqual(expect.arrayContaining([expect.objectContaining(UserObjectMatcher)]));
    });
  });

  describe("Testing add user resolver", () => {
    beforeAll(() => {
      addUser(sampleUser);
    });

    afterAll(() => {
      deleteUserByEmail(sampleUser.email);
    });

    it(`It should return an array with ${totalNumberOfUsers + 1} elements`, async () => {
      const users = getAllUsers();

      expect(users).toHaveLength(totalNumberOfUsers + 1);
    });
  });

  describe("Testing get user by email resolver", () => {
    it("It should return an object that has the property specified", async () => {
      const user = getUserByEmail(userUsedForByEmailQueries.email);

      expect(user).toHaveProperty("firstName", userUsedForByEmailQueries.firstName);
    });

    it("It should return an object that has the specified object properties", async () => {
      const user = getUserByEmail(userUsedForByEmailQueries.email);

      expect(user).toEqual(expect.objectContaining(UserObjectMatcher));
    });
  });

  describe("Testing update user resolver", () => {
    beforeAll(() => {
      updateUser(userDataForUpdates);
    });

    afterAll(() => {
      updateUser(defaultUserDataForUpdates);
    });

    it("It should return an object that has the property specified", async () => {
      const user = getUserByEmail(userDataForUpdates.email);

      expect(user).toHaveProperty("firstName", userDataForUpdates.firstName);
    });
  });

  describe("Testing get multiple users by email resolver", () => {
    it("It should return an array with objects that match the specified object", async () => {
      const users = getMultipleUsersByEmail(arrayOfUserEmails);

      expect(users).toEqual(expect.arrayContaining([expect.objectContaining(UserObjectMatcher)]));
    });

    it(`It should return an array with ${totalNumberOfUsersTobeReturnedByEmailsQuery} elements`, async () => {
      const users = getMultipleUsersByEmail(arrayOfUserEmails);

      expect(users).toHaveLength(totalNumberOfUsersTobeReturnedByEmailsQuery);
    });
  });

  describe("Testing delete user by email resolver", () => {
    beforeAll(() => {
      deleteUserByEmail(userUsedForByEmailQueries.email);
    });

    afterAll(() => {
      addUser(userUsedForByEmailQueries);
    });

    it(`It should return an array with ${totalNumberOfUsers - 1} elements`, async () => {
      const users = getAllUsers();

      expect(users).toHaveLength(totalNumberOfUsers - 1);
    });
  });
});
