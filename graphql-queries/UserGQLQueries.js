const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { getAllUsers, getUserByEmail } = require("../services/resolver-services");

const getAllUsersQuery = {
  type: new GraphQLList(UserType),
  resolve(parent, args) {
    return getAllUsers();
  }
};

const getUserByEmailQuery = {
  type: UserType,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return getUserByEmail(args);
  }
};

module.exports = {
  getAllUsersQuery,
  getUserByEmailQuery
};
