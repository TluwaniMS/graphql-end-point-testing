const userUsedForByEmailQueries = {
  firstName: "Dean",
  lastName: "Hill",
  email: "dean@mock.com"
};

const userDataForUpdates = {
  email: "mmadi@mock.com",
  firstName: "Benjamin",
  lastName: "Malema"
};

const defaultUserDataForUpdates = {
  firstName: "Mmadi",
  lastName: "Ndlovu",
  email: "mmadi@mock.com"
};

const sampleUser = {
  email: "roger@mock.com",
  firstName: "Roger",
  lastName: "Mhlalose"
};

const jwtExistantUserPayLoadData = {
  firstName: "Simmi",
  lastName: "Mda",
  email: "simmi@mock.com"
};

const arrayOfUserEmails = ["idah@mock.com", "jessica@mock.com", "kgaogelo@mock.com"];

const totalNumberOfUsers = 25;

const totalNumberOfUsersTobeReturnedByEmailsQuery = 3;

module.exports = {
  userUsedForByEmailQueries,
  userDataForUpdates,
  defaultUserDataForUpdates,
  arrayOfUserEmails,
  totalNumberOfUsers,
  totalNumberOfUsersTobeReturnedByEmailsQuery,
  sampleUser,
  jwtExistantUserPayLoadData
};
