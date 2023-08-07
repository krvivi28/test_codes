# Title: Error Handling and logging

# Introduction + Scenario:

In the realm of an e-commerce Node.js project, the creation of a robust error handling middleware, 'src/middlewares/errorHandler.js,' is imperative. This middleware, serving at the application level, plays a pivotal role in seamlessly managing errors that may emerge from various operations within the dynamic e-commerce environment. It stands as a guardian, ensuring that responses to clients are adorned with accurate, user-defined error codes and messages. Additionally, it is the safeguard that assures any unhandled errors result in a graceful "500 Internal Server Error" response, gently whispering 'oops! something went wrong...Try again later!' As a final touch, each of these captured errors needs to be faithfully recorded in an error.log file using the esteemed Winston logger library.

# Objectives:

Implement the middleware for error handling, placed at 'src/middlewares/errorHandler.js'.

Manage errors originating from diverse e-commerce operations.

Enrich client responses with well-defined error codes and messages.

Implement a mechanism for unhandled errors to trigger a "500 Internal Server Error" response with the message 'oops! something went wrong...Try again later!'.

Utilize the Winston logger library to log each captured error, adhering to the provided example format.

# Expected Output:

The middleware must accurately format error codes and messages for client responses and appropriately log all errors, following the given logging format.

GIF: https://files.codingninjas.in/summative-2-29835.gif

# Notes/Hints:

Carefully structure your middleware to handle errors from various e-commerce operations.
Pay meticulous attention to error code and message customization.
Implement the "500 Internal Server Error" response for unhandled errors.
Leverage the provided Winston logger library for error logging in the prescribed format.
