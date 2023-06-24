Title: Form Validation and File Upload Middlewares

Introduction:

Develop two separate middlewares to handle form validation and file upload functionalities. The form collects user details such as name, email, and profile image. The validation middleware should use the express-validator library to validate the form inputs and respond with specific error messages for empty name, invalid email, and missing profile image. The file upload middleware, exported as default, should handle the successful submission of form data and profile image.

Objectives:

1.Complete the form validation middleware inside "middleware/expressValidator.js" using express-validator.

2.Validate the user's name, email, and profile image inputs.

3.Respond with appropriate error messages: "Name is required" for an empty name, "Enter a valid email" for an invalid email, and "Profile image is required" for an empty profile image.

4.Create a file upload middleware inside "middleware/fileUploadMiddleware.js" to handle the successful submission of form data and profile image.
Note: The images to be uploaded should be located within the "public/uploads" directory.

Expected Output:

If any validation errors occur, the middleware should respond with the corresponding error message. Otherwise, the middleware should allow the form data and profile image to be successfully uploaded.

Link: https://files.codingninjas.in/uploadmiddleware-28184.gif

Notes/Hints:

1.Ensure the middleware correctly handles and responds with the specified error messages.

2.Export the file upload middleware as default to enable importing as: import imageUpload from "./middleware/fileUploadMiddleware.js"; in the index.js file.

3.Utilize the express-validator library for efficient form validation.

4.Follow best practices for handling file uploads in Express.js.
