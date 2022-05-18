const ADD_USER_MUTATION_STRING = `
  mutation AddUser($userObject:UserInputObjectType!){
    addUser(userObject:$userObject)
  }
`;

const DELETE_USER_BY_EMAIL_MUTATION_STRING = `
    mutation DeleteUserByEmail ($email:String!){
      deleteUserByEmail(email:$email)
    }
`;

const UPDATE_USER_BY_EMAIL_MUTATION_STRING = `
    mutation UpdateUserByEmail($userObject:UserInputObjectType!){
      updateUserByEmail(userObject:$userObject)
    }
`;

module.exports = {
  ADD_USER_MUTATION_STRING,
  DELETE_USER_BY_EMAIL_MUTATION_STRING,
  UPDATE_USER_BY_EMAIL_MUTATION_STRING
};
