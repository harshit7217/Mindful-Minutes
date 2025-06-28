

let breathInterval = null;
let breathTimeout = null;
let stepIndex = 0;
const steps = ["Inhale", "Hold", "Exhale", "Hold"];
const breathSound = document.getElementById("breathSound");

function startBreathing() {
  const duration = parseInt(document.getElementById("duration").value);
  const circle = document.getElementById("circle");
  const instruction = document.getElementById("instruction");

  if (!duration || duration < 1) {
    alert("Please enter a valid duration.");
    return;
  }

  circle.style.animation = "breathe 8s infinite ease-in-out";
  instruction.textContent = "Inhale...";
  breathSound.volume = 1.0;
  breathSound.play();

  stepIndex = 0;
  instruction.textContent = steps[stepIndex];
  circle.style.animation = "breathe 16s infinite";

  breathInterval = setInterval(() => {
    stepIndex = (stepIndex + 1) % steps.length;
    instruction.textContent = steps[stepIndex];
  }, 4000);

  breathTimeout = setTimeout(() => {
    stopBreathing();
    alert("Breathing session complete!");
  }, duration * 60 * 1000);
}

function stopBreathing() {
  clearInterval(breathInterval);
  clearTimeout(breathTimeout);
  document.getElementById("circle").style.animation = "none";
  document.getElementById("instruction").textContent = "Breathing session ended.";
  breathSound.pause();
  breathSound.currentTime = 0;
}