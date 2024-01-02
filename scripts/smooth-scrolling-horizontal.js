function scrollToElement(event, elementId) {
  event.preventDefault();

  // Using jQuery's animate() method to add smooth horizontal scroll
  $('.projects-scroller').animate({
      scrollLeft: $('#' + elementId).offset().left
  }, 800, function(){
      window.location.hash = '#' + elementId;
  });
}
