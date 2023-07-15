# Title: Securing API Route with Express Basic Authentication

# Introduction + Scenario:

In this problem, you are tasked with securing the "/api/product" route using express-basic authentication. The scenario involves a web application that provides user login and registration APIs, along with a product API to fetch all products. To ensure data privacy and restrict access, you need to implement the "basicAuthMiddleware" to allow only authenticated users with valid credentials to access the "/api/product" API.

# Objectives:

Implement express-basic authentication middleware inside "src/middlewares/basicAuth.js."

Restrict access to the "/api/product" route.

Allow only authenticated users with valid credentials to access the API.

# Expected Output:

GIF Link:

The expected outcome is to have the "/api/product" API accessible only to users who provide valid credentials. Unauthorized users should receive an authentication error or be denied access.

# Notes/Hints:

Use the provided user login and registration APIs.
Consider using middleware to handle authentication.
Research how to implement basic authentication in Express.
Remember to test the solution to ensure it functions as expected.
