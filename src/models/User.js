const fs = require("fs");
const path = require("path");

module.exports = user = {
  save: (location, content) => {
    let route = path.join(__dirname, location);
    let file = JSON.parse(fs.readFileSync(route, "utf-8"));
    file.push(content);
    fs.writeFileSync(route, (file = JSON.stringify(file)));
  },
  delete: (location, email) => {
    let route = path.join(__dirname, location);
    let allUser = user.findAll(location);
    allUser = allUser.filter(
      (allUser) => allUser.email != user.findOne(location, email).email
    );
    fs.writeFileSync(route, (allUser = JSON.stringify(allUser)));
  },
  edit: (location, email) => {
    //completar
  },
  findOne: (location, email) => {
    let route = path.join(__dirname, location);
    let file = JSON.parse(fs.readFileSync(route, "utf-8"));
    return file.find((file) => file.email === email) || false;
  },
  findAll: (location) => {
    let route = path.join(__dirname, location);
    let file = JSON.parse(fs.readFileSync(route, "utf-8"));
    return file;
  },
};
