const id = document.getElementById("id");
const userName = document.getElementById("name");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const email = document.getElementById("email");
const createBtn = document.querySelector("button");

const register = (e) => {
  e.preventDefault();
  if (!id.value) return alert("아이디를 입력해주세요.");
  if (password.value !== confirmPassword.value) {
    alert("비밀번호가 일치하지 않습니다.");
  }

  const req = {
    id: id.value,
    name: userName.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    email: email.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert(res.message);
        window.location.href = "/login";
      } else {
        alert(res.message);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입 중 에러 발생"));
    });
};

createBtn.addEventListener("click", register);
