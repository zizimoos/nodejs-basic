import fs from "fs";
import { join } from "path";

class UserStorage {
  static async getUsers(...fields) {
    try {
      const data = await fs.promises.readFile(
        "./src/databases/fileSystem/users.json",
        "utf-8"
      );
      const users = JSON.parse(data);
      console.log("getUsers users", users);
      const newUsers = fields.reduce((newUsers, field) => {
        if (users.hasOwnProperty(field)) {
          newUsers[field] = users[field];
        }
        return newUsers;
      }, {});
      return newUsers;
    } catch (error) {
      console.error(error);
    }
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

  static async save(id, name, password, email) {
    try {
      const users = await this.getUsers("id", "name", "password", "email");
      console.log("save users", users);
      const newUsers = {
        id: [...users.id, id],
        name: [...users.name, name],
        password: [...users.password, password],
        email: [...users.email, email],
      };
      const data = JSON.stringify(newUsers);
      await fs.promises.writeFile(
        "./src/databases/fileSystem/users.json",
        data
      );
      return { success: true, message: "회원가입 성공" };
    } catch (err) {
      console.error(err);
    }
  }
}

export default UserStorage;
