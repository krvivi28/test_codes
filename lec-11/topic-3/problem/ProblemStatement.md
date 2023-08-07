# Title: Using NPM Winston Logger

# Introduction + Scenario:

In this coding problem, you are tasked with implementing a logger middleware using 'winston' library for a Node.js project. The middleware should log specific information for every requested route such as the request timestamp, original URL, and request body. This feature is essential for debugging and monitoring incoming requests and is commonly used in web applications.

# Objectives:

Implement the 'src/middlewares/logger.middleware.js' to log request information using 'winston' library.
The logged information should be stored in 'combined.log' file.

# Expected Output:

The anticipated output comprises a log entry for every requested route, encompassing the timestamp, request URL, and request body in the 'combined.log' file.

GIF: https://files.codingninjas.in/winstonlogger-29813.gif

Sample Output:
{"level":"info","message":"Sun Aug 06 2023 12:32:41 GMT+0530 (India Standard Time)\n req URL: /api/user/register\n reqBody: {\"name\":\"vivek\",\"email\":\"cn@gmail.com\",\"password\":\"Ninjas@123\"}","service":"user-service"}
