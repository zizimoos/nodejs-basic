import UserStorage from "./UserStorage.js";

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const { id, password } = UserStorage.getUserInfo(this.body.id);

    if (id === this.body.id) {
      if (password === this.body.password) {
        return { success: true, message: "로그인 성공" };
      }
      return { success: false, message: "비밀번호가 틀렸습니다." };
    }
    return { success: false, message: "존재하지 않는 아이디입니다." };
  }
}

export default User;
