function setRole(role) {
  const dropLabel = document.getElementById("dropLabel");
  dropLabel.textContent = role + " ▼";
    localStorage.setItem("selectedRole", role);
}

const loginScreen = document.getElementById("loginScreen");
const registerScreen = document.getElementById("registerScreen");
const linkLogin = document.getElementById("linkLogin");

linkLogin.addEventListener("click", function(e){
    e.preventDefault();
    showLogin();
});

function showRegister() {
    loginScreen.classList.add("hidden");
    registerScreen.classList.remove("hidden");
}

function showLogin() {
    loginScreen.classList.remove("hidden");
    registerScreen.classList.add("hidden");
}

function register() {
    const user = document.querySelector("#registerScreen input[type=text]").value;
    const pass = document.querySelector("#registerScreen input[type=password]").value;

    if (user && pass) {
        localStorage.setItem(user, pass);
        alert("Cadastro realizado com sucesso!");
        showLogin();
    } else {
        alert("Preencha todos os campos!");
    }
}

function login() {
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;
    const storedPass = localStorage.getItem(user);

    if (storedPass && storedPass === pass) {
        alert("Login realizado com sucesso!");
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

function togglePasswordVisibility(inputId, iconElement) {
    const input = document.getElementById(inputId);
  
    if (input.type === "password") {
      input.type = "text";
      iconElement.classList.remove("fa-eye");
      iconElement.classList.add("fa-eye-slash");
    } else {
      input.type = "password";
      iconElement.classList.remove("fa-eye-slash");
      iconElement.classList.add("fa-eye");
    }
  }