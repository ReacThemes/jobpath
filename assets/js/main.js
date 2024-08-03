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
      rtsJs.counterUp();
      rtsJs.niceSelect();
      rtsJs.pricingToggle();
      rtsJs.svgInject();
      rtsJs.mobileMenu();
      rtsJs.WowJs();
      rtsJs.activeButton();
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
      // explorer slider
      var swiper = new Swiper(".rts__testimonial__four", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: ".rts__slide__next",
          prevEl: ".rts__slide__prev",
        },
      });
    },
    counterUp: function () {
      try {
        $(".counter").counterUp({
          delay: 10,
          time: 2000,
        });
      } catch (error) {
        console.log("Counterup not declared");
      }
    },
    niceSelect: function (e) {
      $(document).ready(function() {
        $('.select-nice').niceSelect();
      });
    },
    pricingToggle: function () {
      $(document).ready(function () {
        $(".pricing__toogle").change(function () {
          if ($(this).is(":checked")) {
            $(".monthly__pricing").removeClass("active");
            $(".yearly__pricing").addClass("active");
          } else {
            $(".monthly__pricing").addClass("active");
            $(".yearly__pricing").removeClass("active");
          }
        });
      });
    },
    svgInject: function () {
      try {
        SVGInject(document.querySelectorAll("img.svg"));
      } catch (error) {
        console.log("svginject is not declared");
      }
    },
    mobileMenu: function () {
        try {
          $("#offcanvas__menu").meanmenu({
            meanMenuContainer: ".offcanvas__menu",
            meanScreenWidth: "991",
            meanExpand: ["+"],
          });
        } catch (error) {
          console.log("Mobile Menu Not loaded");
        }
    },
    WowJs: function () {
      new WOW().init();
    },
    activeButton: function () {
      document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            });
        });
    })
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
