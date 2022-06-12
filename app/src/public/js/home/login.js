const id = document.getElementById("id");
const password = document.getElementById("password");
const loginBtn = document.querySelector("button");

function login() {
  const req = {
    id: id.value,
    password: password.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("로그인 성공");
        window.location.href = "/";
      } else {
        alert("로그인 실패");
      }
    });
}

loginBtn.addEventListener("click", login);
