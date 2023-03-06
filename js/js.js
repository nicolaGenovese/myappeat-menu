$(document).ready(function() {
    $('#dropdown-menu').change(function() {
      var selectedOption = $(this).children('option:selected').val();
      
      if(selectedOption == 'Monday') {
        $('.title-menu-content').text('Monday Menu');
      } else if(selectedOption == 'Lunch') {
        $('.title-menu-content').text('Lunch Menu');
      } else if(selectedOption == 'Dinner') {
        $('.title-menu-content').text('Dinner Menu');
      } else if(selectedOption == 'Saturday') {
        $('.title-menu-content').text('Saturday Menu');
      } else {
        $('.title-menu-content').text('Titolo del menu');
      }
    });

// get all buttons with class "course-buttons1"
var buttons = $(".course-buttons1");

// add click event listener to all buttons
buttons.on("click", function() {

  // remove CSS properties from all buttons, images, and paragraphs
  buttons.css({
    "background-color": "",
    "border": ""
  });
  $("img").css("filter", "");
  $("p").css("color", "");

  // apply CSS properties and filter to the clicked button and image, and color to paragraph
  $(this).css({
    "background-color": "#282d42",
    "border": "2px solid white"
  });
  $(this).find("img").css("filter", "brightness(5)");
  $(this).find("a").css("color", "white");
});



// sidebar toggle
$(".sidebar-button-item").click(function(){
  $(".sidebar").fadeToggle();

});
  });
  