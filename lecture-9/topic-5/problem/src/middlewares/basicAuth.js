// Please don't change the pre-written code
// Import the necessary modules here

const basicAuthMiddleware = (email, password) => {
  // Write your code here
};

const authorizer = basicAuth({
  authorizer: basicAuthMiddleware,
  challenge: true,
});

export default authorizer;
