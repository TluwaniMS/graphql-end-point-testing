const { users } = require("../sample-data/users-sample-data");

const getAllUsers = () => {
  return users;
};

const getUserByEmail = (args) => {
  return users.filter((user) => user.email === args.email)[0];
};

const addUser = (args) => {
  const newUser = {
    firstName: args.firstName,
    lastName: args.lastName,
    email: args.email
  };

  users.push(newUser);

  return `User with name ${newUser.firstName} has been created successfully`;
};

const deleteUserByEmail = (args) => {
  const selectedUser = users.filter((user) => user.email === args.email)[0];
  const userIndex = users.indexOf(selectedUser);
  users.splice(userIndex, 1);

  return `User has been successfuly deleted.`;
};

const updateUser = (args) => {
  users.forEach((user) => {
    user.email === args.email ? ((user.firstName = args.firstName), (user.lastName = args.lastName)) : "";
  });

  return `User has been updated successfuly.`;
};

module.exports = { getAllUsers, getUserByEmail, addUser, deleteUserByEmail, updateUser };
