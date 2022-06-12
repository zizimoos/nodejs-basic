class UserStorage {
  static #users = {
    id: ["admin", "user", "tessa"],
    password: ["1", "12", "123"],
    name: ["관리자", "사용자", "테사"],
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
}

export default UserStorage;
