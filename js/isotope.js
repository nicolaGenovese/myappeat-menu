$(document).ready(function() {
  var filter = ["","","","","",[]];
  mostraCards(filter, []); 
  $('.seleziona-un-altro-menu').change(function() {
    var selectedMenu = $(this).val(); // recupera il valore selezionato dall'utente
    filter[0] = selectedMenu; // aggiorna il valore "menu" nell'array filter
    mostraCards(filter, []); 
    // alert(filter)
  });

  $('.course-buttons-container').on('click', '.course-button', function() {
    var selectedCourse = $(this).attr('id'); // recupera l'id del pulsante selezionato
    filter[1] = selectedCourse; // aggiorna il valore "course" nell'array filter
    mostraCards(filter, []); 
    // alert(filter)
  });

  $('.button-container').on('click', '.button', function() {
    var selectedDiet = $(this).attr('id'); // recupera l'id del pulsante selezionato
    filter[2] = selectedDiet; // aggiorna il valore "diet" nell'array filter
    mostraCards(filter, []); 
    // alert(filter)
  });

  $("#spicy").on("input", function() {
    var spiceness = $(this).val(); // ottieni il valore del range
    
    // aggiorna l'array filter in base al valore del range
    switch (spiceness) {
      case "0":
        filter[3] = "no-spicy";
        break;
      case "4":
        filter[3] = "slightly-spicy";
        break;
      case "8":
        filter[3] = "show-all-spicy";
        break;
      case "12":
        filter[3] = "spicy";
        break;
        case "16":
        filter[3] = "very-spicy";
        break;
      default:
        filter[3] = "";
        break;
    }
    
    // mostra le cards corrispondenti al nuovo filtro
    mostraCards(filter, []);
  }); 

  $("#calories").on("input", function() {
    var value = $(this).val(); // ottieni il valore del range
    
    // aggiorna l'array filter in base al valore del range
    switch (value) {
      case "0":
        filter[4] = "no-fat";
        break;
      case "4":
        filter[4] = "low-fat";
        break;
      case "8":
        filter[4] = "show-all-calories";
        break;
      case "12":
        filter[4] = "fat";
        break;
        case "16":
        filter[4] = "very-fat";
        break;
      default:
        filter[4] = "";
        break;
    }
    
    // mostra le cards corrispondenti al nuovo filtro
    mostraCards(filter, []);
  }); 

        
  $(".remove-all").click(function() {
    // Svuota l'ultimo elemento dell'array "filter"
    filter[5] = [];
    $(".element-to-hide").hide();
    $("input[type='checkbox']").prop("checked", false);
    mostraCards(filter, []);

  });
        
    
  $('input[type="checkbox"]').change(function() {
    var allergeni = [];
    $('input[type="checkbox"]:checked').each(function() {
      allergeni.push($(this).attr('id'));
    });
    filter[5] = allergeni;
    mostraCards(filter, allergeni); 
    // alert(filter)
  });
  
  function mostraCards(filter) {
    var cards = $('.cards-items');
  
    // Nascondi tutte le cards
    cards.hide();
  
    // Filtra le cards da mostrare
    var cardsToShow = cards.filter(function() {
      var classes = $(this).attr('class').split(' ');
      
      var match = true;
  
      for (var i = 0; i < 5; i++) {
        if (filter[i] !== '' && !classes.includes(filter[i])) {
          match = false;
          break;
        }
      }
  
      return match;
    });
  
    // Mostra le cards filtrate
    cardsToShow.show();
  
    // Nascondi le cards che contengono almeno una classe presente in filter[5]
    filter[5].forEach(function(className) {
      cards.filter('.' + className).hide();
    });
  }
  
});

// function mostraCards(filter, allergeni) {
//   var cards = $('.cards-items');
  
//   // Nascondi tutte le cards
//   cards.hide();
  
//   // Filtra le cards da mostrare
//   var cardsToShow = cards.filter(function() {
//     var classes = $(this).attr('class').split(' ');
    
//     var show = false;
    
//     // Controlla se la card ha tutte le classi in comune con filter[0-4]
//     if (classes.every(function(className) { return filter.includes(className); })) {
//       show = true;
//     }
    
//     return show;
//   });
  
//   // Nascondi le cards che contengono almeno una classe presente in allergeni
//   allergeni.forEach(function(className) {
//     cardsToShow.filter('.' + className).hide();
//   });
  
//   // Mostra le cards filtrate
//   cardsToShow.show();
// }

//-----------------Jquery Only--------------------------------------

// // filtro per menu

// $('.seleziona-un-altro-menu').on('change', function () {
//   // Get the ID of the selected option
//   let selectedOption = $(this).find('option:selected').attr('id');
//   // alert(selectedOption)
//   $('.cards-items').hide();
//   $('.' + selectedOption).show();
// });

// // filtro per course

// $(".course-buttons-container a").click(function () {
//   // Get the ID of the clicked link
//   let selectedCourse = $(this).attr("id");
//   // alert(selectedCourse)
//   // Hide all cards that don't have the selected class
//   $(".cards-items:not(." + selectedCourse).hide();

//   // Show all cards that have the selected class
//   $("." + selectedCourse).show();
// });

// // Filtro per labels

// $('.labels-icons-container a').click(function () {
//   let selectedLabel = $(this).attr('id')
//   // alert(selectedLabel)
//   // nasconde tutte le card
//   $(".cards-items:not(." + selectedLabel).hide();
//   // mostra solo le card con la classe selezionata
//   $("." + selectedLabel).show();
// });

// //Filtro per allergia from sidebar
// // Al click di un checkbox
// $('.sidebar input[type="checkbox"]').click(function () {
//   // Recupero l'id del checkbox cliccato
//   let selectedCheckbox = $(this).attr('id');
//   // alert(selectedCheckbox)
//   // Nascondo le cards che hanno la classe corrispondente
//   $('.' + selectedCheckbox).toggle(!$(this).prop("checked"));
// });

// //Filtro per allergia from top checkbox
// $('.sidebar-button-container input[type="checkbox"]').click(function () {
//   // Recupero l'id del checkbox cliccato
//   let selectedTopCheckbox = $(this).attr('id');
//   // alert(selectedTopCheckbox)
//   // Nascondo le cards che hanno la classe corrispondente
//   $('.' + selectedTopCheckbox).toggle(!$(this).prop("checked"));
// });

//----------------- isotope----------------------

// var $grid = $('.dropdown-cards-container').isotope({
//   itemSelector: '.cards-items',
  
// });
// $grid.isotope('destroy');


// $('.seleziona-un-altro-menu').on('change', function () {
//   // Get the ID of the selected option
//   let filterValue = $(this).find('option:selected').attr('id');
//   $grid.isotope({ filter: filterValue });
// });

// $(".course-buttons-container a").click(function () {
//  // Get the ID of the clicked link
//   let filterValue = $(this).attr("id");
//   $grid.isotope({ filter: filterValue });
// });

// $('.labels-icons-container a').click(function () {
//      let filterValue = $(this).attr('id')
//      $grid.isotope({ filter: filterValue });
//     });

// $('.sidebar input[type="checkbox"]').click(function () {
//       //   // Recupero l'id del checkbox cliccato
//     let filterValue = $(this).attr('id');   
//     $grid.isotope({ filter: filterValue });
//   });




// function applyFilter() {
//   var dayFilter = $('[name="day"]:checked').map(function() {
//       return '[data-day="' + $(this).val() + '"]';
//   }).get().join(', ');
//   var typeFilter = $('.type-filter .filter-btn.active').map(function() {
//       return '[data-type~="' + $(this).attr('data-filter') + '"]';
//   }).get().join(', ');
//   var dietFilter = $('.diet-filter .filter-btn.active').map(function() {
//       return '[data-diet~="' + $(this).attr('data-filter') + '"]';
//   }).get().join(', ');
//   var priceFilter = $('[name="price"]:checked').map(function() {
//       return '[data-price="' + $(this).val() + '"]';
//   }).get().join(', ');
//   var allergenFilter = $('.allergen-filter .filter-checkbox').not(':checked').map(function() {
//       return ':not([data-allergens~="' + $(this).attr('data-filter') + '"])';
//   }).get().join('');

//   var filterString = dayFilter + typeFilter + dietFilter + priceFilter + allergenFilter;

//   $('.menu-item').hide().filter(filterString).show();
// }

// $('.filter-btn').on('click', function() {
//   $(this).toggleClass('active');
//   applyFilter();
// });

// $('.filter-checkbox').on('click', function() {
//   applyFilter();
// });

// $('[name="day"], [name="price"]').on('change', function() {
//   applyFilter();
// });



