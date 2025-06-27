let moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];

function saveMood() {
  const mood = document.getElementById("mood").value;
  const notes = document.getElementById("notes").value;
  const date = new Date().toLocaleDateString();

  const moodEntry = { date, mood, notes };
  moodHistory.push(moodEntry);
  localStorage.setItem("moodHistory", JSON.stringify(moodHistory));

  alert("Mood saved!");
  updateMoodChart();
}

function viewHistory() {
  let historyDiv = document.getElementById("history");
  historyDiv.innerHTML = "<h2>Past Mood Entries</h2>";
  moodHistory.forEach(entry => {
    historyDiv.innerHTML += `<p><strong>${entry.date}:</strong> ${entry.mood} - ${entry.notes}</p>`;
  });
}

let moodChartInstance;

function updateMoodChart() {
  const ctx = document.getElementById("moodChart").getContext("2d");
  const moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];

  const moodCounts = moodHistory.reduce((acc, entry) => {
    acc[entry.mood] = (acc[entry.mood] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(moodCounts);
  const data = Object.values(moodCounts);

  // Destroy previous chart if it exists
  if (moodChartInstance) {
    moodChartInstance.destroy();
  }

  moodChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Mood Frequency",
        data: data,
        backgroundColor: ["#ffcc80", "#80deea", "#ff8a80", "#b39ddb", "#a5d6a7"],
        borderColor: "#00796b",
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", updateMoodChart);


function setReminder() {
  const timeInput = document.getElementById("reminderTime").value;
  const message = document.getElementById("reminderText").value || "Time to check in with yourself 💙";

  if (!timeInput) {
    alert("Please select a valid date and time.");
    return;
  }

  const reminderTime = new Date(timeInput).getTime();
  const now = new Date().getTime();
  const delay = reminderTime - now;

  if (delay <= 0) {
    alert("Please choose a future time.");
    return;
  }

  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      setTimeout(() => {
        new Notification("Mindful Reminder", { body: message });
      }, delay);
      alert("Reminder set!");
    } else {
      alert("Notification permission denied.");
    }
  });
}