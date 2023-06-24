export const createAlbum = (req, res) => {
  let userAlbum = [];
  req.files.forEach((file) => {
    userAlbum.push(file.path);
  });
  console.log(req.files);
  console.log("post called");

  res.status(201).send("Files uploaded and album created!");
};

export const getAlbum = (req, res) => {
  res.send("working get");
};
