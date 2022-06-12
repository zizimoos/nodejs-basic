class UserStorage {
  static #users = {
    id: ["admin", "user", "tessa"],
    password: ["1", "12", "123"],
    name: ["관리자", "사용자", "테사"],
    email: ["aa@aa.com", "bb@bb.com", "cc@cc.com"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, keys) => {
      newUser[keys] = users[keys][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static save(id, name, password, email) {
    const users = this.#users;
    users.id.push(id);
    users.name.push(name);
    users.password.push(password);
    users.email.push(email);
  }
}

export default UserStorage;
