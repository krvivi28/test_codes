import mongoose from "mongoose";
import request from "supertest";
import app from "./index.js";
import { connectToDb } from "./src/config/db.js";

describe("Book API Endpoints", () => {
  beforeAll(async () => {
    // Connect to a test database before running tests
    await connectToDb();
  });

  afterAll(async () => {
    // Disconnect from the test database after running tests
    await mongoose.disconnect();
  });

  beforeEach(async () => {
    // Clear the test database and reset any data
    await mongoose.connection.db.dropDatabase();
  });

  describe("", () => {
    it("", () => {
      expect(2 + 4).toBe(6);
    });
  });
  describe("connectToDb", () => {
    beforeEach(() => {
      mongoose.connect = jest.fn();
      jest.clearAllMocks();
    });
    it("should successfully connect to the database", async () => {
      mongoose.connect.mockResolvedValueOnce({});
      await connectToDb();
      expect(mongoose.connect).toHaveBeenCalled();
    });
  });

  describe("User Registration", () => {
    it("should register a new user with valid data", async () => {
      const userData = {
        name: "Test User",
        email: "tesrfyyfrt@example.com",
        mobile: "12frgg34567890",
        age: 25,
        password: "testpassword",
        type: "student",
      };

      const response = await request(app)
        .post("/codingninjas/api/user/register")
        .send(userData);
      expect(response.statusCode).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.msg).toBe("user registration successful");
      expect(response.body.res).toHaveProperty("_id");
      expect(response.body.res.name).toBe(userData.name);
    });
  });

  describe("User Registration Validation", () => {
    it("registration not allowed with missing name (name is required)", async () => {
      const userData = {
        email: "tesrfyyfrt@example.com",
        mobile: "12frgg34567890",
        age: 25,
        password: "testpassword",
        type: "student",
      };
      const response = await request(app)
        .post("/codingninjas/api/user/register")
        .send(userData);
      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });
  describe("User Registration Validation", () => {
    it("registration not allowed with invalid name (length of name should be greater than equal to 3)", async () => {
      const userData = {
        name: "vi",
        email: "tesrfyyfrt@example.com",
        mobile: "12frgg34567890",
        age: 25,
        password: "testpassword",
        type: "student",
      };
      const response = await request(app)
        .post("/codingninjas/api/user/register")
        .send(userData);
      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });
  describe("User Registration Validation", () => {
    it("registration not allowed with invalid email)", async () => {
      const userData = {
        name: "vivek",
        email: "tesrfyyfrt@example",
        mobile: "12frgg34567890",
        age: 25,
        password: "testpassword",
        type: "student",
      };
      const response = await request(app)
        .post("/codingninjas/api/user/register")
        .send(userData);
      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });
  describe("User Registration Validation", () => {
    it("registration not allowed with missing email (email is required))", async () => {
      const userData = {
        name: "vivek",
        mobile: "12frgg34567890",
        age: 25,
        password: "testpassword",
        type: "student",
      };
      const response = await request(app)
        .post("/codingninjas/api/user/register")
        .send(userData);
      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });
  describe("User Registration Validation", () => {
    it("registration not allowed with missing age (age is required))", async () => {
      const userData = {
        name: "vivek",
        email: "krvivi28@gmail.com",
        mobile: "12frgg34567890",
        password: "testpassword",
        type: "student",
      };
      const response = await request(app)
        .post("/codingninjas/api/user/register")
        .send(userData);
      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });
  describe("User Registration Validation", () => {
    it("registration not allowed with inavalid age (age should be greater than 0))", async () => {
      const userData = {
        name: "vivek",
        email: "krvivi28@gmail.com",
        mobile: "12frgg34567890",
        age: 0,
        password: "testpassword",
        type: "student",
      };
      const response = await request(app)
        .post("/codingninjas/api/user/register")
        .send(userData);
      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });
  describe("User Registration Validation", () => {
    it("registration not allowed without type (type is required)", async () => {
      const userData = {
        name: "vivek",
        email: "krvivi28@gmail.com",
        mobile: "12frgg34567890",
        age: 22,
        password: "testpassword",
      };
      const response = await request(app)
        .post("/codingninjas/api/user/register")
        .send(userData);
      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });
  describe("User Registration Validation", () => {
    it("registration not allowed with inavalid type (can be either 'student,' 'fresher,' or 'experienced'))", async () => {
      const userData = {
        name: "vivek",
        email: "krvivi28@gmail.com",
        mobile: "1234567890",
        age: 15,
        password: "testpassword",
        type: "educator",
      };
      const response = await request(app)
        .post("/codingninjas/api/user/register")
        .send(userData);
      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe("User Login", () => {
    it("should log in a user with valid credentials", async () => {
      const userData = {
        name: "Test User",
        email: "test@example.com",
        mobile: "9123456789",
        age: 25,
        password: "testpassword",
        type: "student",
      };
      await request(app).post("/codingninjas/api/user/register").send(userData);
      const userCredentials = {
        email: "test@example.com", // Use the email of the user registered in the previous test
        password: "testpassword",
      };

      const response = await request(app)
        .post("/codingninjas/api/user/login")
        .send(userCredentials)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.msg).toBe("user login successful");
    });

    it("should handle login with invalid credentials", async () => {
      const userData = {
        name: "Test User",
        email: "test@example.com",
        mobile: "9123456789",
        age: 25,
        password: "testpassword",
        type: "student",
      };
      await request(app).post("/codingninjas/api/user/register").send(userData);
      const invalidCredentials = {
        email: "test@example.com",
        password: "testpassword2",
      };

      const response = await request(app)
        .post("/codingninjas/api/user/login")
        .send(invalidCredentials)
        .expect(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe("Update User Password", () => {
    it("should update the user password", async () => {
      const newPasswordData = {
        newPassword: "newtestpassword",
      };

      const userData = {
        name: "Test User",
        email: "test@example.com",
        mobile: "9123456789",
        age: 25,
        password: "testpassword",
        type: "student",
      };
      await request(app).post("/codingninjas/api/user/register").send(userData);
      const userCredentials = {
        email: "test@example.com", // Use the email of the user registered in the previous test
        password: "testpassword",
      };

      const loginResponse = await request(app)
        .post("/codingninjas/api/user/login")
        .send(userCredentials);

      const token = loginResponse.body.token;

      const response = await request(app)
        .post("/codingninjas/api/user/update/password")
        .set("Cookie", [`jwtToken=${token}`])
        .send(newPasswordData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.msg).toBe("password updated successfully");
      expect(response.body.res).toHaveProperty("_id");
    });
  });

  describe("Update User Password", () => {
    it("user should not be able to login with old password after updating the password", async () => {
      const newPasswordData = {
        newPassword: "newtestpassword",
      };

      const userData = {
        name: "Test User",
        email: "test@example.com",
        mobile: "9123456789",
        age: 25,
        password: "testpassword",
        type: "student",
      };
      await request(app).post("/codingninjas/api/user/register").send(userData);
      const userCredentials = {
        email: "test@example.com", // Use the email of the user registered in the previous test
        password: "testpassword",
      };

      const loginResponse = await request(app)
        .post("/codingninjas/api/user/login")
        .send(userCredentials);

      const token = loginResponse.body.token;

      const response = await request(app)
        .post("/codingninjas/api/user/update/password")
        .set("Cookie", [`jwtToken=${token}`])
        .send(newPasswordData);

      const newloginResponse = await request(app)
        .post("/codingninjas/api/user/login")
        .send(userCredentials)
        .expect(400);
    });
  });
  // describe("connectToDb", () => {
  //   beforeEach(() => {
  //     mongoose.connect = jest.fn();
  //     jest.clearAllMocks();
  //   });
  //   it("should successfully connect to the database", async () => {
  //     mongoose.connect.mockResolvedValueOnce({});
  //     await connectToDb();
  //     expect(mongoose.connect).toHaveBeenCalled();
  //   });
  // });

  // describe("User Registration", () => {
  //   it("should register a new user with valid data", async () => {
  //     const userData = {
  //       name: "Test User",
  //       email: "tesrfyyfrt@example.com",
  //       mobile: "12frgg34567890",
  //       age: 25,
  //       password: "testpassword",
  //       type: "student",
  //     };

  //     const response = await request(app)
  //       .post("/codingninjas/api/user/register")
  //       .send(userData);
  //     expect(response.statusCode).toBe(201);
  //     expect(response.body.success).toBe(true);
  //     expect(response.body.msg).toBe("user registration successful");
  //     expect(response.body.res).toHaveProperty("_id");
  //     expect(response.body.res.name).toBe(userData.name);
  //   });
  // });

  // describe("Update User Password", () => {
  //   it("user should not be able to login with old password after updating the password", async () => {
  //     const newPasswordData = {
  //       newPassword: "newtestpassword",
  //     };

  //     const userData = {
  //       name: "Test User",
  //       email: "test@example.com",
  //       mobile: "9123456789",
  //       age: 25,
  //       password: "testpassword",
  //       type: "student",
  //     };
  //     await request(app).post("/codingninjas/api/user/register").send(userData);
  //     const userCredentials = {
  //       email: "test@example.com", // Use the email of the user registered in the previous test
  //       password: "testpassword",
  //     };

  //     const loginResponse = await request(app)
  //       .post("/codingninjas/api/user/login")
  //       .send(userCredentials);

  //     const token = loginResponse.body.token;

  //     const response = await request(app)
  //       .post("/codingninjas/api/user/update/password")
  //       .set("Cookie", [`jwtToken=${token}`])
  //       .send(newPasswordData);

  //     const newloginResponse = await request(app)
  //       .post("/codingninjas/api/user/login")
  //       .send(userCredentials)
  //       .expect(400);
  //   });
  // });
  // describe("POST api/books", () => {
  //   it("should create a new book", async () => {
  //     const newBookData = {
  //       title: "Sample Book",
  //       author: "Sample Author",
  //       genre: "Fiction",
  //       copies: 5,
  //       availableCopies: 5,
  //     };

  //     const response = await request(app)
  //       .post("/api/books")
  //       .send(newBookData)
  //       .expect(201);

  //     expect(response.body).toMatchObject(newBookData);
  //   });
  // });

  // describe("GET api/books/:bookId", () => {
  //   it("should retrieve a book by ID", async () => {
  //     const bookData = {
  //       title: "Sample Book",
  //       author: "123456789012345678901234",
  //       genre: "Fiction",
  //       copies: 5,
  //       availableCopies: 5,
  //     };

  //     const book = await new BookRepository().createBook(bookData);

  //     const response = await request(app)
  //       .get(`/api/books/${book._id}`)
  //       .expect(200);

  //     expect(response.body).toMatchObject(bookData);
  //   });

  //   it("should return 404 if book ID does not exist", async () => {
  //     const nonExistentBookId = new mongoose.Types.ObjectId(); // Replace with a non-existent ID
  //     console.log(nonExistentBookId);

  //     await request(app).get(`/api/books/${nonExistentBookId}`).expect(404);
  //   });
  // });
});
