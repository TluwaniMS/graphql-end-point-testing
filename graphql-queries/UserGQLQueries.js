const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { getAllUsers, getUserByEmail } = require("../services/resolver-services");
const { UserModel } = require("../graphql-models/UserGQLModel");

const getAllUsersQuery = {
  type: new GraphQLList(UserModel),
  resolve(parent, args) {
    return getAllUsers();
  }
};

const getUserByEmailQuery = {
  type: UserModel,
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
