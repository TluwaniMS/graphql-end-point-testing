const { extractJWTToken } = require("../services/middleware-services");
const { getUserByEmail, addUser } = require("../services/resolver-services");

const userSyncHandler = (req, res, next) => {
  if (req.headers.authorization) {
    const tokenInformation = extractJWTToken(req.headers.authorization);
    const user = getUserByEmail(tokenInformation.email);

    if (!user) {
      addUser(tokenInformation);
      const createdUser = getUserByEmail(tokenInformation.email);
      req.user = createdUser;
    } else {
      req.user = user;
    }
  }

  next();
};

module.exports = { userSyncHandler };
