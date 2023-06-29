Title: Blogging Platform - File Management Module

Introduction:
Implement an ES6 module called 'blogActions.js' for a blogging platform. The module should provide two functions: 'writeBlog' and 'publishBlog'. The 'writeBlog' function should save a user's blog to a specified file path, while the 'publishBlog' function should retrieve and return the content of a specified file. This module will be used in a real-world scenario where users can write and publish their blogs on the platform.

Objectives:

1.Implement the 'writeBlog' function to accept a file path and user's blog, saving it to the specified file.

2.Implement the 'publishBlog' function to accept a file path and return the content of the specified file.

3.Utilize the readline interface to input the user's blog and store it in the file 'myblog.txt'.

4.Retrieve and display the written blog using the 'publishBlog' function.

Expected Output:

The 'writeBlog' function should save the user's blog to the specified file path successfully. The 'publishBlog' function should retrieve and return the content of the specified file, allowing it to be displayed or processed further.

Requirements:

1.Implement the module using ES6 syntax, without requiring a change in the file extension(.mjs).

2.Use the readline interface to input the user's blog.
Ensure the 'writeBlog' function writes the blog to the given file path.

Notes/Hints:

1.Consider using the fs module for file operations in Node.js.

2.Pay attention to error handling, such as file not found or read/write errors.

3.Remember to export the 'writeBlog' and 'publishBlog' functions from the 'blogActions.js' module.
