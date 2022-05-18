const { users } = require("../sample-data/users-sample-data");
const { OperationalSupportMessages } = require("../enumerators/operational-support-mesages");

const getAllUsers = () => {
  return users;
};

const getUserByEmail = (email) => {
  return users.filter((user) => user.email === email)[0];
};

const getMultipleUsersByEmail = (emailArray) => {
  return users.filter((user) => emailArray.includes(user.email));
};

const addUser = ({ firstName, lastName, email }) => {
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email
  };

  users.push(newUser);

  return OperationalSupportMessages.CreationResponseMessage(newUser.firstName);
};

const deleteUserByEmail = (email) => {
  const selectedUser = users.filter((user) => user.email === email)[0];
  const userIndex = users.indexOf(selectedUser);
  users.splice(userIndex, 1);

  return OperationalSupportMessages.DeletionResponseMessage;
};

const updateUser = ({ email, firstName, lastName }) => {
  users.forEach((user) => {
    user.email === email ? ((user.firstName = firstName), (user.lastName = lastName)) : "";
  });

  return OperationalSupportMessages.UpdateResponseMessage;
};

module.exports = { getAllUsers, getUserByEmail, addUser, deleteUserByEmail, updateUser, getMultipleUsersByEmail };
