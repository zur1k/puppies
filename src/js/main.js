$(document).ready(function () {
  $('.slider-items').slick({

    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          autoplay: true,
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],

    // prevArrow:"<button type='button' class='slider-btn  slider-btn--prev'></button>",
    prevArrow: "<button class='slider-btn slider-btn--prev' type='button'></button>",
    nextArrow: "<button class='slider-btn slider-btn--next' type='button'></button>"




  });

  // планое перемещение 
  $("#nav").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });



  // menu


  $("#nav-toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");

  });
  $(".nav-menu__link").on("click", function (event) {
    event.preventDefault();

    $("#nav-toggle").toggleClass("active");
    $("#nav").toggleClass("active");

  });


});