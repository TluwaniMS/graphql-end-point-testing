const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { getAllUsersQuery, getUserByEmailQuery } = require("./graphql-queries/UserGQLQueries");
const {
  addUserMutation,
  deleteUserByEmailMutation,
  updateUserByEmailMutation
} = require("./graphql-mutations/UserGQLMutations");

const Query = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: getAllUsersQuery,
    getUserByEmail: getUserByEmailQuery
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
