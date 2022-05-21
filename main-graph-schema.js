const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const {
  getAllUsersQuery,
  getUserByEmailQuery,
  getMultipleUsersByEmailQuery,
  getMultipleUsersByEmailErrorTriggerQuery
} = require("./graphql-queries/UserGQLQueries");
const {
  addUserMutation,
  deleteUserByEmailMutation,
  updateUserByEmailMutation
} = require("./graphql-mutations/UserGQLMutations");

const Query = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: getAllUsersQuery,
    getUserByEmail: getUserByEmailQuery,
    getMultipleUsersByEmail: getMultipleUsersByEmailQuery,
    getMultipleUsersByEmailErrorTrigger: getMultipleUsersByEmailErrorTriggerQuery
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addUser: addUserMutation,
    deleteUserByEmail: deleteUserByEmailMutation,
    updateUserByEmail: updateUserByEmailMutation
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
