function abrirLinkedin() {
    window.open("https://www.linkedin.com/feed/", "_blank");
  }
function abrirGithub() {
    window.open("https://github.com/nadamu91", "_blank");
  }
document.getElementById("miBoton").addEventListener("click", abrirLinkedin);
document.getElementById("miBoton2").addEventListener("click", abrirGithub);
