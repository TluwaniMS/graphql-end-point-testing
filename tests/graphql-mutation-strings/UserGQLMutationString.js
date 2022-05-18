const ADD_USER_MUTATION_STRING = `
  mutation AddUser($email:String!,$firstName:String!,$lastName:String!){
    addUser(email:$email,firstName:$firstName,lastName:$lastName)
  }
`;

const DELETE_USER_BY_EMAIL_MUTATION_STRING = `
    mutation DeleteUserByEmail ($email:String!){
      deleteUserByEmail(email:$email)
    }
`;

const UPDATE_USER_BY_EMAIL_MUTATION_STRING = ``;

module.exports = {
  ADD_USER_MUTATION_STRING,
  DELETE_USER_BY_EMAIL_MUTATION_STRING,
  UPDATE_USER_BY_EMAIL_MUTATION_STRING
};
