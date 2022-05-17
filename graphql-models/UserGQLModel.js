const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require("graphql");

const UserModel = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    email: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) }
  })
});

module.exports = { UserModel };
