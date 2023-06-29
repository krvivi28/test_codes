import Solution from "./index.js";
import readline from "readline";
import nodemailer from "nodemailer";

jest.mock("nodemailer");

const userMail = "nishant@codingninjas.com";

const createInterfaceSpy = jest
  .spyOn(readline, "createInterface")
  .mockReturnValue({
    question: jest.fn().mockImplementationOnce((question, cb) => cb(userMail)),
    close: jest.fn(),
  });

const consoleSpy = jest.spyOn(console, "log");

const smtpDetails = {
  service: "gmail",
  auth: {
    user: "codingninjas2k16@gmail.com",
    pass: "slwvvlczduktvhdj",
  },
};

let mailOptions = {
  from: "codingninjas2k16@gmail.com",
  to: userMail,
  subject: "coding Ninjas",
  text: "The world has enough coders; be a coding ninja!",
};

describe("An interface which takes a mail as input is created and mail is sent to that specific email", () => {
  it("sends an email to the specified user", () => {
    const transporter = {
      sendMail: jest.fn((mailOptions, callback) => {
        callback(null, { response: "OK" });
      }),
    };

    nodemailer.createTransport.mockReturnValueOnce(transporter);

    Solution();

    expect(createInterfaceSpy).toHaveBeenCalledTimes(1);

    expect(nodemailer.createTransport).toHaveBeenCalledTimes(1);
    expect(nodemailer.createTransport).toHaveBeenCalledWith(smtpDetails);

    expect(transporter.sendMail).toHaveBeenCalledTimes(1);
    expect(transporter.sendMail.mock.calls[0][0]).toEqual(mailOptions);

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy.mock.calls[0][0]).toMatch(/nishant@codingninjas\.com/i);
  });
});
