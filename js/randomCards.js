$(document).ready(function() {
    var menu = ["monday","lunch","dinner","saturday",];
    var course = ["starter","main","side","salad","dessert","drink"];
    var diet = ["vegan","vegetarian","meat"];
    var spiceness = ["no-spicy","slightly-spicy","spicy","very-spicy"];
    var calories = ["no-fat","low-fat","fat","very-fat"];
    var allergens = ["celery","gluten","crustaceans","eggs","fish","lupin","milk","molluscs","mustard","nuts","peanuts","sesame-seeds","soya","sulphur-dioxide"];
    var images = [
        'img/piatto1.jpg',
        'img/piatto2.jpg',
        'img/piatto3.jpg',
        'img/piatto3.jpg',
        'img/piatto4.jpg',
        'img/piatto5.jpg',
        'img/piatto6.jpg',
        'img/piatto7.jpg',
        'img/piatto8.jpg',
        'img/piatto9.jpg',
        'img/piatto11.jpg',
        'img/piatto12.jpg',
        'img/piatto13.jpg',
        'img/piatto14.jpg',
        'img/piatto15.jpg',
        'img/piatto16.jpg',        ];
    var cardHtml = `<div class="cards-items show-all show-all-spicy show-all-calories">

    <div class="overlap-group5">
        <img id = "random-plate" class="a53959eceaed76a3a3ada8f4fde15924" src="img/a53959eceaed76a3a3ada8f4fde15924-1@1x.png"
            alt="a53959eceaed76a3a3ada8f4fde15924" />
        <div class="overlap-group3">
            <div class="rectangle-33"></div>
            <div class="rectangle-34-1"></div>
            <div class="primo-piatto-di-pasta">Primo piatto di pasta</div>
            <div class="nd">N.d.</div>
            <p class="lorem-ipsum-dolor-si">
                <span class="span0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore
                    et dolore ….<br /></span><span class="span1">Pomodoro, cipolla, Carne, Olive</span>
            </p>
            <img class="icon-star" src="img/path-11-5@1x.png" alt="icon-star" />
            <div class="group-11">
                <div class="glutine glutine-2 ptsans-normal-regent-gray-15px">GLUTINE</div>
            </div>
            <div class="group-12">
                <div class="glutine-1 glutine-2 ptsans-normal-regent-gray-15px">GLUTINE</div>
            </div>
            <div class="group-13">
                <div class="glutine glutine-2 ptsans-normal-regent-gray-15px">GLUTINE</div>
            </div>
            <div class="price">19.50€</div>
            <img class="line-5 line" src="img/line-1-1@1x.png" alt="Line 5" />
            <div class="mask-group-7 mask-group">
                <div class="chili-pepper-svgrepo-com">
                    <div class="path-container-1">
                        <img class="path-30" src="img/path-13-1@1x.png" alt="Path 30" />
                        <img class="path-31" src="img/path-14-1@1x.png" alt="Path 31" />
                        <img class="path-32" src="img/path-15-1@1x.png" alt="Path 32" />
                        <img class="path-33" src="img/path-16-1@1x.png" alt="Path 33" />
                    </div>
                </div>
            </div>
            <div class="mask-group-8-1">
                <div class="leaf-svgrepo-com">
                    <div class="overlap-group1">
                        <img class="path-34" src="img/path-34-1@1x.png" alt="Path 34" />
                        <div class="group-14-1">
                            <div class="path-container">
                                <img class="path-35" src="img/path-35-1@1x.png" alt="Path 35" />
                                <img class="path-36" src="img/path-19-1@1x.png" alt="Path 36" />
                            </div>
                            <img class="path-37" src="img/path-20-1@1x.png" alt="Path 37" />
                        </div>
                        <img class="path-38" src="img/path-21-1@1x.png" alt="Path 38" />
                        <img class="path-39" src="img/path-22-1@1x.png" alt="Path 39" />
                    </div>
                </div>
            </div>
            <img class="line-6 line" src="img/line-2-1@1x.png" alt="Line 6" />
            <div class="text text-2">… +3</div>
            <div class="rectangle-28-1"></div>
            <div class="aggiungi">Aggiungi</div>
            <div class="ellipse-2-1"></div>
            <div class="mask-group-10-1">
                <div class="cart-add-svgrepo-com">
                    <div class="primary-container">
                        <img class="primary-3" src="img/primary-10@1x.png" alt="primary" />
                        <img class="primary-4" src="img/primary-11@1x.png" alt="primary" />
                    </div>
                    <div class="primary-upstroke-container">
                        <img class="primary-upstroke" src="img/primary-upstroke-10@1x.png"
                            alt="primary-upstroke" />
                        <img class="primary-upstroke" src="img/primary-upstroke-10@1x.png"
                            alt="primary-upstroke" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
  
    for (var i = 0; i < 100; i++) {
      var randomMenuIndex = Math.floor(Math.random() * menu.length);
      var randomCourseIndex = Math.floor(Math.random() * course.length);
      var randomDietIndex = Math.floor(Math.random() * diet.length);
      var randomSpicenessIndex = Math.floor(Math.random() * spiceness.length);
      var randomCaloriesIndex = Math.floor(Math.random() * calories.length);
      var randomAllergensIndex = Math.floor(Math.random() * allergens.length);
      var randomImageIndex = Math.floor(Math.random() * images.length);
  
      var card = $(cardHtml);
      card.addClass(menu[randomMenuIndex]);
      card.addClass(course[randomCourseIndex]);
      card.addClass(diet[randomDietIndex]);
      card.addClass(spiceness[randomSpicenessIndex]);
      card.addClass(calories[randomCaloriesIndex]);
      card.addClass(allergens[randomAllergensIndex]);

      var imageSrc = images[randomImageIndex];
    card.find('#random-plate').attr('src', imageSrc);
  
      $(".dropdown-cards-container").append(card);
    }
  });
  