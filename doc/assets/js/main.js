(function (window, document, $) {
	'use strict';

	//variables
	var _window = $(window),
		_document = $(document),
		_body = $('body');

	// code hightligher
	var hljs = function () {
		$('code').each(function() {
            var that = $(this);
            // cache the content of 'code'
            var html = that.html().trim();
            that.empty();
            // escape the content
            that.text(html);
        });

	};
	//SMOOTHSCROLL
	var smoothScroll = function (e) {

		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			var $f = target.offset().top,
				$g = $f - 40,
				$y;

			if (target.length) {
				$('#section-featured_work').is(target) ? $y = $g : $y = $f;
				$('html, body').animate({
					scrollTop: $y
				}, 1000, 'easeInOutExpo');
				return !1
			}
		}
	};

	_document.on('click', '.page-scroll', smoothScroll);

	//scrollspy
	var _scrollSpy = function () {
		var hash = function (h) {
			if (history.pushState) {
				history.pushState(null, null, h);
			} else {
				location.hash = h;
			}
		};
		_document.on('click', 'a', function (event) {

			var _refVal = $(this).attr("href");

			if ($(this).attr('href') !== "#" && $(this).attr('href').indexOf("#") > -1 && $(_refVal).length) {
				event.preventDefault();
				$("html, body").animate({
					scrollTop: $(_refVal).offset().top - 30
				}, {
					duration: 700,
					easing: "easeInOutExpo",
					complete: hash(_refVal)
				});

				$("section").removeClass('active');
				$(_refVal).addClass('active');
			}
		});
	}

	var stickToTop = function () {
		var _sideNav = $('.sidebar-navigation'),
			_backToTop = $('.back-to-top');

		_window.on('scroll', function () {
			if (_window.scrollTop() > 200) {
				_sideNav.addClass('stick-to-top');
				_backToTop.addClass('show');
			} else {
				_sideNav.removeClass('stick-to-top');
				_backToTop.removeClass('show');
			}
		});
	}

	_document.on("keyup", ".search-input", function () {
		var value = $(this).val().toLowerCase();
		$(".sidebar-navigation ol *").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});

	_body.scrollspy({
		target: '.nav',
		offset: 100
	})

	_document.on('click', '.toggle-navbar', function (e) {
		$('.sidebar-navigation').toggleClass('show');
	});

	_document.on('click', function (e) {
		if (!$('.sidebar-navigation *').is(e.target) && !$('.toggle-navbar *').is(e.target)) {
			$('.sidebar-navigation').removeClass('show');
		}
	});
	_document.on('click', function (e) {
		$('pre').each(function() {
			$(this).prev('.copy-clipboard').on('click',function() {
				var code = $(this).siblings('pre').text();
				$(this).siblings('pre').append(`<textarea readonly class="clipboard"></textarea>`);
				$(this).siblings('pre').find('textarea.clipboard').val(code);
				$(this).siblings('pre').find('textarea.clipboard').select();
				document.execCommand('copy');
				$(this).text('Copied');
				$(this).siblings('pre').find('textarea.clipboard').remove();
				setTimeout(function() {
					$('.copy-clipboard').text('Copy');
				}, 2000);
			});
		});
	});
	hljs();
	_scrollSpy();
	stickToTop();

})(window, document, jQuery);
