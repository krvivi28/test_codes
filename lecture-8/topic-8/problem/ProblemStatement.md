Title: Implementing Album Routes with File Handling in Express

Introduction: You are developing a prototype for a new photo management application. The app will allow users to create albums and upload multiple photos to them.

Objectives:

Set up an Express server with necessary middlewares.

Create a POST endpoint at '/api/albums' to upload multiple photos and an album name.

The uploaded photos should be stored in a 'uploads' folder, and the album name along with the associated photos should be added to an in-memory data structure, albumDB.

Implement the albumDB as a middleware in your Express application.

Create a GET endpoint at '/api/albums/:albumName' that returns all the images associated with the given album name.

Expected Output: A server that can handle the creation of new albums with photos via the POST endpoint and retrieve all images associated with an album via the GET endpoint.

Requirements: The server should be built using Express.js, Node.js and Multer for handling file uploads.

Resources:

Express.js documentation: https://expressjs.com/en/5x/api.html
Multer documentation: https://github.com/expressjs/multer

Note:

1. The album name should be part of the form-data with key 'album', and photos should be attached with key 'photos'.

2. The filename for each photo should be albumName + "-" + originalFileName.

3. The GET /api/albums/:albumName endpoint should return an array of image filenames associated with the album name, or a 'Album not found' message with status code 404 if the album does not exist.

Hints: Consider using Multer's array(fieldname[, maxCount]) function for handling multiple photos upload.
