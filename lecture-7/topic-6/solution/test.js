const users = [
  { id: 1, name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" },
];
const reqUser = { email: "krvivi28@gmail.com", password: "vivek28@" };
let res = false;
users.forEach((user) => {
  console.log(user);
  if (user.email == reqUser.email && user.password == reqUser.password) {
    res = true;
  }
});

console.log(res);
