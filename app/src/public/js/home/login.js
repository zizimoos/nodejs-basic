const id = document.getElementById("id");
const password = document.getElementById("password");
const loginBtn = document.querySelector("button");

function login() {
  const req = {
    id: id.value,
    password: password.value,
  };
}

loginBtn.addEventListener("click", login);
