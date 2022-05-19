const GET_ALL_USERS_QUERY_STRING = `
  query GetAllUsers {
    getAllUsers{
      email
      firstName
      lastName
    }
  }
`;

const GET_USER_BY_EMAIL_QUERY_STRING = `
  query GetUserByEmail($email:String!){
    getUserByEmail(email:$email){
      email
      firstName
      lastName
    }
  }
`;

const GET_MULTIPLE_USERS_BY_EMAIL_QUERY_STRING = `
  query GetMultipleUsersByEmail($arrayOfEmails:[String!]){
    getMultipleUsersByEmail(arrayOfEmails:$arrayOfEmails){
      email
      firstName
      lastName
    }
  }
`;

const GET_USER_BY_EMAIL_QUERY_STRING_TO_TRIGGER_MIDDLEWARE_UNKNOWN_REQUEST = `
  query GetUserByEmail($email:String!){
    getUserByEmai(email:$email){
      email
      firstName
      lastName
    }
  }
`;
module.exports = {
  GET_ALL_USERS_QUERY_STRING,
  GET_USER_BY_EMAIL_QUERY_STRING,
  GET_MULTIPLE_USERS_BY_EMAIL_QUERY_STRING,
  GET_USER_BY_EMAIL_QUERY_STRING_TO_TRIGGER_MIDDLEWARE_UNKNOWN_REQUEST
};
