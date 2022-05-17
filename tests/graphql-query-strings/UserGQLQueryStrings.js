const GET_ALL_USERS_QUERY_STRING = `
  query GetAllUsers {
    getAllUsers{
      email
      firstName
    }
  }
`;

const GET_USER_BY_EMAIL_QUERY_STRING = `
  query GetUserByEmail($email:String!){
    getUserByEmail(email:$email){
      email
      firstName
    }
  }
`;

module.exports = {
  GET_ALL_USERS_QUERY_STRING,
  GET_USER_BY_EMAIL_QUERY_STRING
};
