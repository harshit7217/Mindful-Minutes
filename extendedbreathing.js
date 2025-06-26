let extendedInterval = null;
let extendedTimeout = null;

function startExtendedBreathing() {
  const duration = parseInt(document.getElementById("duration").value);
  const circle = document.getElementById("circle");
  const instruction = document.getElementById("instruction");

  if (!duration || duration < 1) {
    alert("Please enter a valid duration.");
    return;
  }

  instruction.textContent = "Inhale...";
  circle.style.animation = "extendedBreath 12s infinite ease-in-out";

  extendedInterval = setInterval(() => {
    instruction.textContent = instruction.textContent === "Inhale..." ? "Exhale..." : "Inhale...";
  }, 12000); // 4s in + 8s out

  extendedTimeout = setTimeout(() => {
    stopExtendedBreathing();
    alert("Extended Exhale session complete!");
  }, duration * 60 * 1000);
}

function stopExtendedBreathing() {
  clearInterval(extendedInterval);
  clearTimeout(extendedTimeout);
  document.getElementById("circle").style.animation = "none";
  document.getElementById("instruction").textContent = "Breathing session ended.";
}