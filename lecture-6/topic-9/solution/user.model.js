export const users = [
  {
    id: 1,
    name: "coding ninjas",
    email: "ninja@gmail.com",
    image: "https://entrackr.com/storage/2022/10/Coding-Ninjas.jpg",
  },
  {
    id: 2,
    name: "BGMI",
    email: "pubg@krafton.com",
    image:
      "https://assets.mspimages.in/wp-content/uploads/2021/05/Battlegrounds-Mobile-India-4.jpg",
  },
];

export const delUser = (id) => {
  const userIndex = users.findIndex((user) => {
    return user.id === id;
  });
  users.splice(userIndex, 1);
  return users;
};
