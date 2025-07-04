let boxInterval = null;
let boxTimeout = null;
let stepIndex = 0;
const steps = ["Inhale", "Hold", "Exhale", "Hold"];
const breathSound = document.getElementById("breathSound");

function startBoxBreathing() {
  const duration = parseInt(document.getElementById("boxDuration").value);
  const instruction = document.getElementById("instruction");
  const box = document.getElementById("box");

  if (!duration || duration < 1) {
    alert("Please enter a valid duration (at least 1 minute).");
    return;
  }

  box.style.animation = "breathe 8s infinite ease-in-out";
  instruction.textContent = "Inhale...";
  breathSound.volume = 1.0;
  breathSound.play();

  stepIndex = 0;
  instruction.textContent = steps[stepIndex];
  box.style.animation = "boxBreath 16s infinite";

  boxInterval = setInterval(() => {
    stepIndex = (stepIndex + 1) % steps.length;
    instruction.textContent = steps[stepIndex];
  }, 4000);

  boxTimeout = setTimeout(() => {
    stopBoxBreathing();
    alert("Box Breathing session complete!");
  }, duration * 60 * 1000);
}

function stopBoxBreathing() {
  clearInterval(boxInterval);
  clearTimeout(boxTimeout);
  document.getElementById("box").style.animation = "none";
  document.getElementById("instruction").textContent = "Box Breathing stopped.";
  breathSound.pause();
  breathSound.currentTime = 0;
}