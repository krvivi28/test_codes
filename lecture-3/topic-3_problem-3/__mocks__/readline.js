export default {
  createInterface: jest.fn().mockReturnValue({
    question: jest.fn().mockImplementationOnce((_questionTest, cb) => cb("y")),
    close: jest.fn().mockImplementationOnce(() => undefined),
  }),
};
