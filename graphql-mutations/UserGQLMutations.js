const { GraphQLString, GraphQLNonNull } = require("graphql");
const { addUser, deleteUserByEmail, updateUser } = require("../services/resolver-services");
const { UserInputObjectType } = require("../graphql-models/UserGQLInputTypeObject");

const addUserMutation = {
  type: GraphQLString,
  args: {
    userObject: { type: new GraphQLNonNull(UserInputObjectType) }
  },
  resolve(parent, args) {
    return addUser(args.userObject);
  }
};

const deleteUserByEmailMutation = {
  type: GraphQLString,
  args: { email: { type: new GraphQLNonNull(GraphQLString) } },
  resolve(parent, args) {
    return deleteUserByEmail(args.email);
  }
};

const updateUserByEmailMutation = {
  type: GraphQLString,
  args: {
    userObject: { type: new GraphQLNonNull(UserInputObjectType) }
  },
  resolve(parent, args) {
    return updateUser(args.userObject);
  }
};

module.exports = {
  addUserMutation,
  deleteUserByEmailMutation,
  updateUserByEmailMutation
};
