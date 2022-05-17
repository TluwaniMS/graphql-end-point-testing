const { GraphQLString, GraphQLNonNull } = require("graphql");

const addUserMutation = {
  type: GraphQLString,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return addUser(args);
  }
};

const deleteUserByEmailMutation = {
  type: GraphQLString,
  args: { email: { type: new GraphQLNonNull(GraphQLString) } },
  resolve(parent, args) {
    return deleteUserByEmail(args);
  }
};

const updateUserByEmailMutation = {
  type: GraphQLString,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return updateUser(args);
  }
};

module.exports = {
  addUserMutation,
  deleteUserByEmailMutation,
  updateUserByEmailMutation
};
