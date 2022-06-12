import UserStorage from "./UserStorage.js";

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const { id, password } = UserStorage.getUserInfo(this.body.id);
    //  유저가 입력한 위의 id는 저장된 데이타에 없으면, undefine을 리턴하고, 에러를 발생시킨다.
    //  그냥, 유저테이블에서 아이디를 검색해서 있어 없음을 판단하면 안되나?
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
