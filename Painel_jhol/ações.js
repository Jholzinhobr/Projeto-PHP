// Função para mudar o texto de Professor/Aluno
function setRole(role) {
  const dropLabel = document.getElementById("dropLabel");
  dropLabel.textContent = role + " ▼";
    localStorage.setItem("selectedRole", role);
}

// Pegando elementos do DOM
const loginScreen = document.getElementById("loginScreen");
const registerScreen = document.getElementById("registerScreen");
const linkLogin = document.getElementById("linkLogin");

// Eventos para trocar de tela
linkLogin.addEventListener("click", function(e){
    e.preventDefault();
    showLogin();
});

// Funções de mostrar telas
function showRegister() {
    loginScreen.classList.add("hidden");
    registerScreen.classList.remove("hidden");
}

function showLogin() {
    loginScreen.classList.remove("hidden");
    registerScreen.classList.add("hidden");
}

// Funções de cadastro e login
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
        // Aqui você pode adicionar o que acontece após o login
    } else {
        alert("Usuário ou senha incorretos!");
    }
}
