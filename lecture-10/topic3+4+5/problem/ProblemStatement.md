# Title: Efficient E-commerce Cart Management System

# Introduction and Scenario

You are a developer in a thriving e-commerce venture. The current cart system has limitations that have led to user dissatisfaction. Your responsibility is to enhance the cart's functionality by implementing distinct cart controllers for adding and removing items. Additionally, you need to develop corresponding model functions for these cart features, ensuring a seamless shopping experience.

The process begins with user login since the cart API is secured. After logging in, users can utilize the cart API routes to add, update, and remove items from their carts.

The user ID and JWT are stored in cookies simultaneously during user login (refer to the 'loginUser' controller within 'features/user' for better comprehension). The user ID can be easily retrieved from cookies whenever needed for operations requiring the user ID. The user ID is present in the JWT payload and accessible as req.userId.

# Objectives

Implement the "addToCartController" and its respective cart model function to manage item addition and updating in the cart based on query parameters. The "addToCartController" will use the 'addToCart' function within the cart model to add items to the cart. This function should enable adding new items and updating the quantity of existing products. The data, including product ID and quantity, must be passed through query parameters (e.g., http://localhost:3000/api/cart/?productId=6&quantity=5).

Implement the "removeFromCartController". This controller should use the 'removeFromCart' function in the cart model to delete items from the user's cart. To delete a cart item, use the item's ID provided in the request parameters (e.g., http://localhost:3000/api/cart/{item_id}).

# Expected Output

Expected Output Video Link:
https://drive.google.com/file/d/1OKi4z485EwiTnMO6Z9h49iPKO1KQEDWR/view?usp=sharing

1. Upon successfully adding an item to the cart using the "addToCartController," the response should follow this format:

{
"success": true,
"item": [user's cart items]
}
For example:
POST: http://localhost:3000/api/cart/?productId=6&quantity=10
{
"success": true,
"item": [
{
"id": 1,
"userId": 1,
"productId": 2,
"quantity": 5
},
{
"id": 3,
"userId": 1,
"productId": 6,
"quantity": 10
}
]
}

2. Upon successfully deleting an item using the "removeFromCartController," the response should follow this structure:

{
"success": true,
"deletedCartItem": [deleted item details]
}
For example:
DELETE: http://localhost:3000/api/cart/1
{
"success": true,
"deletedCartItem": {
"id": 1,
"userId": 1,
"productId": 2,
"quantity": 5
}
}

3. If the "removeFromCartController" receives an invalid ID for cart item deletion, the response should be:

DELETE: http://localhost:3000/api/cart/100
{
"success": false,
"msg": "operation not allowed"
}

# Notes/Hints

The "addToCartController" must perform input validation and JWT token verification before processing the request.
Ensure that the "removeFromCartController" confirms the existence of the item in the user's cart before proceeding with deletion.
