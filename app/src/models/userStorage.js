import fs from "fs";

class UserStorage {
  static getUsers(...fields) {
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return newUsers;
  }

  static async getUserInfo(id) {
    try {
      const data = await fs.promises.readFile(
        "./src/databases/fileSystem/users.json",
        "utf-8"
      );
      const users = JSON.parse(data);
      const idx = users.id.indexOf(id);
      const userInfo = Object.keys(users).reduce((newUser, keys) => {
        newUser[keys] = users[keys][idx];
        return newUser;
      }, {});
      console.log("userInfo", userInfo);
      return userInfo;
    } catch (err) {
      console.error(err);
    }
  }

  static save(id, name, password, email) {
    users.id.push(id);
    users.name.push(name);
    users.password.push(password);
    users.email.push(email);
  }
}

export default UserStorage;
