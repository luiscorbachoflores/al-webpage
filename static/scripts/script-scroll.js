/* en el móvil, para esconder la barra de navegación al hacer scroll hacia abajo */
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-8vh";
  }
  prevScrollpos = currentScrollPos;
} 