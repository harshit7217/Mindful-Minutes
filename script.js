function startApp() {
  const name = document.getElementById('username').value.trim();
  const message = document.getElementById('welcomeMessage');

  if (name.length < 2) {
    alert("Please enter your name to continue.");
    return;
  }

  // Show welcome message
  message.textContent = `Welcome, ${name}! Redirecting you to calmness... 🌿`;

  // Store name for later use
  localStorage.setItem("userName", name);

  // Redirect after 5 seconds (5000 ms)
  setTimeout(() => {
    window.location.href = "home.html";
  }, 3000);
}