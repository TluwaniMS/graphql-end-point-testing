const { decode } = require("jsonwebtoken");

const extractJWTToken = (authorizationHeader) => {
  const splitAuthorizationHeaderValues = authorizationHeader.split(" ");
  const token = splitAuthorizationHeaderValues[1];

  const decodedToken = decode(token);

  return decodedToken;
};

module.exports = { extractJWTToken };
