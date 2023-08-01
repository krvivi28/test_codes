# Title: E-commerce Cart Management

# Introduction + Scenario:

In an E-commerce project, you are responsible for implementing the "addToCartController," "removeFromCartController," "addToCart" (Model), and "removeFromCart" functions. These functions handle adding or removing items from the user's cart. User authentication is done through JWT tokens. The "addToCartController" should add new items to the cart or update the quantity if the product already exists. 

(The productId and quantity should be passed with query params and userId to be fetched the jwt token)

On the other hand, the "removeFromCartController" should delete an item from the user's cart. Ensure proper validation and secure cart management for a seamless shopping experience.

# Objectives:

Implement the "addToCartController" to add or update items in the cart based on query parameters.
Develop the "removeFromCartController" to delete items from the cart using the item's ID and JWT payload.
Create the "addToCart" Model function to manage cart items efficiently.

# Expected Output:

After successfully adding an item to the cart, the "addToCartController" should respond with:
{
"success": true,
"item": [the user's cart items]
}

Upon successful deletion, the "removeFromCartController" should respond with:
{
"success": true,
"deletedCartItem": [deleted item details]
}

"If the 'removeFromCartController' receives an invalid ID for the cart item deletion, it should respond with:

{
"success": false,
"msg": "operation not allowed"
}"

GIF Link: https://files.codingninjas.in/cart-29572.gif

# Notes/Hints:

The "addToCartController" should validate the input and JWT token before processing the request.
Ensure the "removeFromCartController" checks if the item exists in the user's cart before removing it.
Consider using appropriate data structures like dictionaries/maps for efficient cart management.
