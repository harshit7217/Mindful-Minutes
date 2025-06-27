function saveGratitude() {
  const input = document.getElementById("gratitudeInput").value.trim();
  if (!input) return alert("Please write something you're grateful for!");
  
  const date = new Date().toLocaleString();
  const entry = { text: input, date };

  const stored = JSON.parse(localStorage.getItem("gratitudeEntries")) || [];
  stored.unshift(entry); // newest first
  localStorage.setItem("gratitudeEntries", JSON.stringify(stored));

  document.getElementById("gratitudeInput").value = "";
  displayEntries();
}

function displayEntries() {
  const container = document.getElementById("gratitudeLog");
  const entries = JSON.parse(localStorage.getItem("gratitudeEntries")) || [];
  container.innerHTML = entries.map(e =>
    `<div><strong>${e.date}</strong><br>${e.text}</div><hr/>`
  ).join('');
}

document.addEventListener("DOMContentLoaded", displayEntries);