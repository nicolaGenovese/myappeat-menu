$(document).ready(function() {


    $(".course-button").click(function() {
      // Ripristina lo stile dei bottoni precedenti
      $(".course-button").not(this).css("background-color", "var(--link-water)");
      $(".course-button").not(this).find(".course-icon img").css("filter", "none");
      $(".course-button").not(this).find(".course-text").css("color", "var(--regent-gray)");
  
      // Applica lo stile al bottone cliccato
      $(this).css("border", "1px solid white");
      $(this).css("background-color", "var(--ebony-clay)");
      $(this).find(".course-icon img").css("filter", "invert(34%) sepia(14%) saturate(1103%) hue-rotate(303deg) brightness(98%) contrast(90%);");
      $(this).find(".course-text").css("color", "white");
    });



// sidebar toggle
$(".sidebar").hide();
  $(".sidebar-button-item").click(function() {
    $(".sidebar").fadeToggle();
  });


  });
  