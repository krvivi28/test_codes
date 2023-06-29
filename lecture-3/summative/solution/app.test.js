import { CustomEvent, Solution } from "./index.js";
import server from "./index.js";
import nodemailer from "nodemailer";
import request from "supertest";
import fs from "fs";
import EventEmitter from "events";

const userMail = "nishant@codingninjas.com";

const smtpDetails = {
  service: "gmail",
  auth: {
    user: "codingninjas2k16@gmail.com",
    pass: "slwvvlczduktvhdj",
  },
};

const mailOptions = {
  from: "codingninjas2k16@gmail.com",
  to: userMail,
  subject: "Query received",
  text: "We have received your query and will get back to you soon.",
};

jest.mock("nodemailer");
const consoleSpy = jest.spyOn(console, "log");
describe("Tests", () => {
  let customEvent;

  beforeAll(() => {
    customEvent = new CustomEvent();
  });

  it("should handle POST requests, append the request body data to a file and send email to the user", async () => {
    Solution();

    const transporter = {
      sendMail: jest.fn((mailOptions, callback) => {
        callback(null, { response: "OK" });
      }),
    };

    nodemailer.createTransport.mockReturnValueOnce(transporter);

    const response = await request(server)
      .post("/")
      .send({ name: "Random", email: userMail, message: "Hello there!" });

    expect(response.status).toBe(200);

    const data = await new Promise((resolve, reject) => {
      fs.readFile("queries.txt", "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });

    expect(data).toMatch(/random/i);
    expect(data).toMatch(/nishant@codingninjas.com/i);
    expect(data).toMatch(/hello there!/i);

    expect(nodemailer.createTransport).toHaveBeenCalledTimes(1);
    expect(nodemailer.createTransport).toHaveBeenCalledWith(smtpDetails);

    expect(transporter.sendMail).toHaveBeenCalledTimes(1);
    expect(transporter.sendMail.mock.calls[0][0]).toEqual(mailOptions);
  });
});
