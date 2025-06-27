function saveUser() {
  const name = document.getElementById("username").value.trim();
  if (!name) return alert("Please enter your name.");
  localStorage.setItem("mindfulUser", name);
  showGreeting();
}

function showGreeting() {
  const name = localStorage.getItem("mindfulUser");
  if (name) {
    document.getElementById(
      "greeting"
    ).textContent = `Welcome back, ${name} 🌿`;
  }
}

document.addEventListener("DOMContentLoaded", showGreeting);

function showUser() {
  const name = localStorage.getItem("mindfulUser");
  if (name) {
    document.getElementById("username").textContent = name;
  }
}

function saveIntent() {
  const task = document.getElementById("userIntent").value.trim();
  if (!task) return alert("Please enter something!");
  localStorage.setItem("todayIntent", task);
  displayIntent();
}

function displayIntent() {
  const task = localStorage.getItem("todayIntent");
  const display = document.getElementById("intentDisplay");
  if (task) {
    display.innerHTML = `<h3>🌼 Your intention for today:</h3><p>${task}</p>`;
  }
}

function displayIntent2() {
  const task = localStorage.getItem("todayIntent");
  const display = document.getElementById("intentDisplay2");
  if (task) {
    display.innerHTML = `<h3>🌼 Your goals for today:</h3><p>${task}</p>`;
  }
}

function setPreset() {
  const goal = document.getElementById("presetIntent").value;
  if (goal) {
    localStorage.setItem("todayIntent", goal);
    displayIntent2();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showUser();
  displayIntent();
  completeIntent();
});

