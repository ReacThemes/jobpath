/*=== Javascript function indexing ===*/

(function ($) {
    "use strict";
    let device_width = window.innerWidth;
  
    var rtsJs = {
      m: function (e) {
        rtsJs.d();
        rtsJs.methods();
      },
      d: function (e) {
        (this._window = $(window)),
          (this._document = $(document)),
          (this._body = $("body")),
          (this._html = $("html"));
      },
      methods: function (e) {
        rtsJs.swiperActivation();
        rtsJs.niceSelect();
        rtsJs.backToTop();
      },
      swiperActivation: function () {
        $(function () {
          // initialize swipers with default and custom options
          initSwipers(".swiper-data", {
            spaceBetween: 30,
            slidesPerView: 2,
          });
          // utility function to initialize swipers
          function initSwipers(selector, defaults) {
            const swipers = document.querySelectorAll(selector);
            swipers.forEach((swiper) => {
              const optionsData = swiper.dataset.swiper
                ? JSON.parse(swiper.dataset.swiper)
                : {};
              const options = Object.assign({}, defaults, optionsData);
              new Swiper(swiper, options);
            });
          }
  
        });
      },
      
      niceSelect: function (e) {
        try {
          $("select").niceSelect();
        } catch (error) {
          console.log("error niceSelect");
        }
      },
 
      backToTop: function () {
        $(document).ready(function () {
          var backButton = $("#rts-back-to-top");
          $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                backButton.addClass("show");
            } else {
                backButton.removeClass("show");
            }
        });
          backButton.on("click", function () {
              $("html, body").animate(
                  {
                      scrollTop: 0,
                  },
                  1000
              );
          });
      });
      
      },
    };
    rtsJs.m();
  })(jQuery, window);
  