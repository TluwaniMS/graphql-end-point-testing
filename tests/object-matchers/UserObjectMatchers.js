const UserObjectMatcher = {
  email: expect.any(String),
  firstName: expect.any(String),
  lastName: expect.any(String)
};

module.exports = { UserObjectMatcher };
