# Title: Implement Product Rating Feature for E-commerce Project

# Introduction + Scenario:

You are working on an E-commerce project and have been assigned the task of implementing a product rating feature. Users should be able to rate products using their user ID, product ID, and the desired rating as query parameters. Invalid inputs (user ID, product ID, or rating out of range) should be handled, returning appropriate JSON responses. The feature will enhance user engagement and help in making informed purchase decisions.

# Objectives:

Implement the "rateProduct" controller for the route "api/product/rateproduct" that handles user ratings for products.
Validate user input for user ID, product ID, and rating, responding with appropriate JSON objects for invalid cases.
Ensure that product ratings fall within the range of 0 to 5.
Provide a successful response containing the product details, including the updated ratings, in case of valid input.

Expected Output:

GIF LINK: https://files.codingninjas.in/filterproduct-29549.gif

# For invalid user ID:

{
"success": false,
"msg": "user not found"
}

# For invalid product ID:

{
"success": false,
"msg": "product not found"
}

# For invalid rating:

{
"success": false,
"msg": "rating should be b/w 0 and 5"
}

# For a valid case:

{
"success": true,
"product": {
"id": 3,
"name": "samsung",
"price": 60000,
"ratings": [
{
"userId": "2",
"rating": "4"
}
]
}
}

# Notes/Hints:

Remember to handle edge cases and input validation thoroughly.
Implement error handling for scenarios like invalid user IDs, product IDs, and out-of-range ratings.
