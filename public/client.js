const domainName = document.getElementById("login-form__subdomain");
const loginPassword = document.getElementById("login-form__password");
const loginButton = document.getElementById("login-form__button");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  domainName.value = "";
  loginPassword.value = "";
});
