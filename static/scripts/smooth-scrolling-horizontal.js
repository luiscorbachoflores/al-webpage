/* para el svcroll del project.html */
function scrollToElement(event, elementId) {
  event.preventDefault();

  $('.projects-scroller').animate({
      scrollLeft: $('#' + elementId).offset().left
  }, 800, function(){
      window.location.hash = '#' + elementId;
  });
}
