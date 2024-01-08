/* en el móvil, para esconder la barra de navegación al hacer scroll hacia abajo */
var prevScrollpos = window.scrollY;
window.onscroll = function() {
var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos ||  window.scrollY < 50) {
    document.getElementById("NavBar").style.top = "0";
  } else {
    document.getElementById("NavBar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}