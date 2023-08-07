# Title: Node.js Logger Middleware

# Introduction + Scenario:

In this coding problem, you are tasked with implementing a logger middleware for a Node.js project. The middleware should log specific information such as the request timestamp, original URL, and request body for the '/api/user' routes. This feature is essential for debugging and monitoring incoming requests and is commonly used in web applications.

# Objectives:

Implement the 'src/middlewares/logger.middleware.js' to log request information.
Ensure the logger middleware only logs details for the '/api/user' routes.
Create a log.txt file to store the logged information.

# Expected Output:

GIF: https://files.codingninjas.in/logger-29810.gif
The expected output is a log entry for each request to '/api/user' routes, including the timestamp, request URL, and request body in the log.txt file.

Sample Output:
Sat Aug 05 2023 20:48:35 GMT+0530 (India Standard Time)
req URL: /api/user/register
reqBody: {"name":"codingninjas","email":"cn@gmail.com","password":"Ninjas@123"}

# Notes/Hints:

Pay attention to the format of the sample log output provided in the problem statement.
Remember to handle edge cases, such as handling requests to routes other than '/api/user'.
Consider using existing logging libraries or built-in Node.js functions to simplify the implementation.
