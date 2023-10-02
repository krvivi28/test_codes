### Title:

Managing Many-to-Many Relationships in Mongoose

## Introduction + Scenario:

In a book management system, we've introduced a new feature that involves managing many-to-many relationships between authors and books. Authors can be associated with multiple books, and books can have multiple authors. This feature enhances the flexibility and organization of book data. You're tasked with implementing key functionalities related to this relationship, such as creating authors, associating authors with books, listing authors of a book, and listing books by an author.

## Objectives:

1. Create an author schema with the following fields:

   - name: A required string field for the author's name. Ensure it's trimmed.
   - books: An array of ObjectIds referencing the books collection.

2. Update Book Schema:
   Modify the Book Schema to accommodate authors by linking them using the authors field. This field should consist of an array of references to Author objects.

3. Implement the following functions in the repository file:

   - createAuthor: This function should create a new author document using the Author Schema and return the saved author's details.

   - addAuthorToBook: Implement this function, which associates an author with a specific book by accepting the bookId and authorId as parameters. Update the Book Schema to include the 'authors' array. This function should return the book and author details after the association is made.

   - listAuthorsByBook: Implement this function that retrieves and lists all authors associated with a particular book. Ensure that the Book Schema includes an 'authors' array. This function should return a list of author details.

   - listBooksByAuthor: Implement this function that lists all books written by a specific author by providing the authorId. Update the Author Schema to include a book array. This function should return a list of book details written by the author.

To test the routes using Postman, please refer to the provided video link in the '# Expected Output' section

## Expected Output:

Output should look like: https://files.codingninjas.in/lect_16_2-31347.mp4
