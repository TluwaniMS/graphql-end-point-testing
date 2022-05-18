const { GraphQLInputObjectType } = require("graphql");
const { GraphQLString, GraphQLNonNull } = require("graphql");

const UserInputObjectType = new GraphQLInputObjectType({
  name: "UserInputObjectType",
  fields: () => ({
    email: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) }
  })
});

module.exports = { UserInputObjectType };
