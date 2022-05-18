const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { getAllUsers, getUserByEmail, getMultipleUsersByEmail } = require("../services/resolver-services");
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
    return getUserByEmail(args.email);
  }
};

const getMultipleUsersByEmailQuery = {
  type: new GraphQLList(UserModel),
  args: {
    arrayOfEmails: { type: new GraphQLList(GraphQLString) }
  },
  resolve(parent, args) {
    return getMultipleUsersByEmail(args.arrayOfEmails);
  }
};

module.exports = {
  getAllUsersQuery,
  getUserByEmailQuery,
  getMultipleUsersByEmailQuery
};
