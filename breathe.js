function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
}

function startTechnique(type) {
      if(type == 'box') {
        window.location.href = "box_breathing.html";
      }else if(type == 478) {
        window.location.href = "478breathing.html";
      }else if(type == 'equal') {
        window.location.href = "equalbreathing.html";
      }else {
        window.location.href = "extendedbreathing.html";
      }
      // You can link to a specific animation page or start logic here
    }