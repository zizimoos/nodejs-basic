import UserStorage from "./UserStorage.js";

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const userInfo = await UserStorage.getUserInfo(this.body.id);
    const { id, name, password, email } = userInfo;
    if (!id) {
      return { success: false, message: "아이디가 존재하지 않습니다." };
    }
    if (password !== this.body.password) {
      return { success: false, message: "비밀번호가 일치하지 않습니다." };
    }
    if (id === this.body.id && password === this.body.password) {
      return { success: true, message: "로그인 성공" };
    }
  }

  async register() {
    const userInfo = await UserStorage.getUserInfo(this.body.id);
    const { id, name, password, confirmPassword, email } = this.body;
    console.log("register userInfo", userInfo);
    if (password === confirmPassword) {
      if (userInfo.id === id) {
        return { success: false, message: "이미 존재하는 아이디입니다." };
      }
      const saveRespond = await UserStorage.save(id, name, password, email);
      if (saveRespond.success) {
        return { success: true, message: "회원가입 성공" };
      }
    }
    return { success: false, message: "비밀번호가 일치하지 않습니다." };
  }
}

export default User;
