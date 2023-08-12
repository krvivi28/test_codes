# Title: Error Handling and logging

# Introduction + Scenario:

In the provided e-commerce Node.js project, implement an error-handling middleware using the Error class located at 'src/middlewares/errorHandler.js'. This middleware should operate at the application level, effectively managing errors from various operations. Simultaneously, it should log each error into an 'error.log' file using the Winston logger('src/middlewares/logger.middleware.js').
It should be designed to capture intentionally thrown errors with custom status codes and error messages. Unhandled errors should trigger a "500" status code along with the error message "Oops! Something went wrong... Please try again later!".

# Objectives:

Implement the 'src/middlewares/errorHandler.js' middleware to effectively capture errors.

Capture intentionally thrown errors with customized status codes and messages.

Implement the logic to handle unhandled errors with a default "500" status code and a user-friendly error message.

Utilize the Winston logger library to log each captured error, adhering to the provided example format.

# Expected Output:

Logged errors must encompass essential details such as error level, timestamp, request URL, and error message. For example:
{"level": "error", "timestamp": "Tue Aug 08 2023 01:30:09 GMT+0530 (India Standard Time)", "request URL": "/", "error message": "testing app level error handling middleware"}.

GIF: https://files.codingninjas.in/summative-lec-11-29962.gif
