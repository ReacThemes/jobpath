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
      rtsJs.StickyHeader();
      rtsJs.swiperActivation();
      rtsJs.counterUp();
      rtsJs.niceSelect();
      rtsJs.pricingToggle();
      rtsJs.svgInject();
      rtsJs.mobileMenu();
      rtsJs.WowJs();
      rtsJs.preloader();
      rtsJs.activeButton();
      rtsJs.chartJs();
      rtsJs.backToTop();
    },
    // sticky Header
    StickyHeader: function () {
      $(window).on("scroll", function() {
        var ScrollBarPostion = $(window).scrollTop();
        if (ScrollBarPostion > 100) {
          $(".rts__header").addClass("sticky");      
        } else {
          $(".rts__header").removeClass("sticky");   
        }
      });
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
    preloader:function(){
      window.addEventListener('load',function(){
        document.querySelector('body').classList.add("loaded")  
      });          
    },
    activeButton: function () {
      $(document).ready(function() {
        const currentPath = window.location.pathname.split("/").pop(); 
        const navLinks = document.querySelectorAll('.dash__menu .nav-link');
    
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href').split("/").pop();
    
            if (linkPath === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
      });

        // active button
        $(document).ready(function() {
          document.querySelectorAll('.profile__view__tab .nav-link').forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.profile__view__tab .nav-link').forEach(btn => {
                    btn.classList.remove('active');
                });
        
                // Add active class to the clicked button
                this.classList.add('active');
            });
          });
        });

        // dashboard menu show
        $(document).ready(function() {
          document.querySelector('.sidebar__action').addEventListener('click', function() {
            document.querySelector('.dashboard__left').classList.add('active');
          });

          document.addEventListener('click', function(event) {
            const dashboardLeft = document.querySelector('.dashboard__left');
            const sidebarAction = document.querySelector('.sidebar__action');

            if (!dashboardLeft.contains(event.target) && !sidebarAction.contains(event.target)) {
                dashboardLeft.classList.remove('active');
            }
          });
        });

      
    },
    chartJs: function () {
      try {
        // chart one
        var options__candidate = {
          series: [{
          name: 'candidate',
          data: [30, 50, 40, 60, 42, 85, 60, 40, 50, 90, 60, 100]
        }],
          chart: {
          height: 450,
          type: 'area',
          toolbar:{
            show: false,
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'day',
          categories: ["2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19"]
        },
        tooltip: {
        enabled: true,
          x: {
            format: 'dd/MM/yy'
          },
        },
        };
        var chart = new ApexCharts(document.querySelector("#spline__chart__candidate"), options__candidate);
        chart.render();
      } catch (error) {
        console.log("ChartJs Not used this page");
      }

      // chart two
      try{
        var options_1 = {
          series: [{
          name: 'employer',
          data: [50, 70, 100, 150, 142, 185, 160, 240, 150, 240, 160, 200]
        }],
          chart: {
          height: 450,
          type: 'area',
          foreColor: '#373d3f',
          toolbar:{
            show: false,
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'day',
          categories: ["2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19"]
        },
        tooltip: {
        enabled: true,
          x: {
            format: 'dd/MM/yy'
          },
        },
        };
        var chart = new ApexCharts(document.querySelector("#spline__chart"), options_1);
        chart.render();
      } catch (error) {
        console.log("ChartJs Not used this page");
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
