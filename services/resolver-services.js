const { users } = require("../sample-data/users-sample-data");

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

  return `User with name ${newUser.firstName} has been created successfully`;
};

const deleteUserByEmail = (email) => {
  const selectedUser = users.filter((user) => user.email === email)[0];
  const userIndex = users.indexOf(selectedUser);
  users.splice(userIndex, 1);

  return `User has been successfuly deleted.`;
};

const updateUser = ({ email, firstName, lastName }) => {
  users.forEach((user) => {
    user.email === email ? ((user.firstName = firstName), (user.lastName = lastName)) : "";
  });

  return `User has been updated successfuly.`;
};

module.exports = { getAllUsers, getUserByEmail, addUser, deleteUserByEmail, updateUser, getMultipleUsersByEmail };
