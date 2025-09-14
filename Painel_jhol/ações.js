// Simulação de banco de dados no localStorage
function register() {
  const user = document.getElementById("regUser").value;
  const pass = document.getElementById("regPass").value;

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
    showRooms();
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

function logout() {
  showLogin();
}

function showRegister() {
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("registerScreen").classList.remove("hidden");
  document.getElementById("roomsScreen").classList.add("hidden");
}

function showLogin() {
  document.getElementById("loginScreen").classList.remove("hidden");
  document.getElementById("registerScreen").classList.add("hidden");
  document.getElementById("roomsScreen").classList.add("hidden");
}

function showRooms() {
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("registerScreen").classList.add("hidden");
  document.getElementById("roomsScreen").classList.remove("hidden");

  const rooms = ["Sala 101", "Sala 102", "Sala 103", "Sala 104"];
  const roomList = document.getElementById("roomList");
  roomList.innerHTML = "";

  rooms.forEach((room) => {
    const li = document.createElement("li");
    li.textContent = room + " - Disponível";
    roomList.appendChild(li);
  });
}
