$(document).ready(function () {

	/* nav button click event */
	var clicked = false;
	var header = $("header");
	header.find(".nav-btn").click(function () {
		var $this = $(this);
		if (!clicked) {
			clicked = true;
			$this.parent().toggleClass('active');
			setTimeout(function () {
				clicked = false;
			}, 820);
		}
	});

	/* Show Sticky Navigator */
	var mainSection = $('.main-section');
	$(window).scroll(function () {
		if ($(window).scrollTop() >= mainSection.height() - 50) {
			header.addClass('sticky');
		} else {
			header.removeClass('sticky');
		}
	});

	$(document).on('click', function(e) {
		var clickOver = $(e.target);
		if (!clickOver.closest('header').length && $('nav').hasClass('active')) {
			$('nav').removeClass('active');
		}
	});


	/* ====| Slider Function |==== */

	function menuSlider() {
		var $sliderContainer = $('.menu-slider');
		var $slider = $sliderContainer.find('.slider');
		var $sliderBanner = $sliderContainer.find('.slider-banner');
		var $sliderItems = $sliderBanner.find('.slider-item');
		var itemsNumber = $sliderItems.length;
		var $nextBtn = $sliderContainer.find('.arrow.next');
		var $prevBtn = $sliderContainer.find('.arrow.prev');

		var slidesToShow = 3;
		var activeSlides = slidesToShow;

		function responsiveSlides() {
			activeSlides -= slidesToShow;
			if ( $(window).width() <= 991 && $(window).width() > 550 ) {
				slidesToShow = 2;
			} else if ( $(window).width() <= 550 ) {
				slidesToShow = 1;
			} else {
				slidesToShow = 3;
			}
			activeSlides += slidesToShow;
		} responsiveSlides();

		$sliderItems.outerWidth( parseInt($slider.width() / slidesToShow) );
		var itemWidth;
		var itemsWidth;

		function fixWidth() {
			itemWidth = $('.menu-slider .slider-item').outerWidth();
			itemsWidth = itemWidth * itemsNumber;
			$sliderBanner.width(itemsWidth);
		 } fixWidth();

		function leftCalc() {
			return itemWidth * itemMove;
		}



		$(window).resize(function() {
			responsiveSlides();
			$sliderItems.outerWidth( parseInt($slider.width() / slidesToShow) );
			fixWidth();
			$sliderBanner.css('left', -leftCalc());
		});

		var left = 0;
		var itemMove = 0;
		var clicked = false;

		function checkStatus() {
			if (activeSlides == itemsNumber) {
				$nextBtn.addClass('disabled');
			} else {
				$nextBtn.removeClass('disabled');
			}

			if (activeSlides == slidesToShow) {
				$prevBtn.addClass('disabled');
			} else {
				$prevBtn.removeClass('disabled');
			}
		} checkStatus();


		$nextBtn.click(function() {
			if (!clicked) {
				if (activeSlides != itemsNumber) {
					clicked = true;
					itemMove++;
					left = -leftCalc();
					$sliderBanner.css('left', left);
					activeSlides++;
					setTimeout(function() {
						clicked = false;
					}, 400);
					checkStatus();
				}
			}
		});

		$prevBtn.click(function() {
			if (!clicked) {
				if (activeSlides > slidesToShow ) {
					clicked = true;
					itemMove--;
					left = -leftCalc();
					$sliderBanner.css('left', left);
					activeSlides--;
					setTimeout(function() {
						clicked = false;
					}, 400);
					checkStatus();
				}
			}
		});

	} menuSlider();


	/* ====| Chief Slider |==== */

	function chiefSlider() {
		var $sliderContainer = $('.chief-slider');
		var $slider = $sliderContainer.find('.slider');
		var $sliderBanner = $sliderContainer.find('.slider-banner');
		var $sliderItems = $sliderBanner.find('.slider-item');
		var itemsNumber = $sliderItems.length;
		var $nextBtn = $sliderContainer.find('.arrow.next');
		var $prevBtn = $sliderContainer.find('.arrow.prev');

		var slidesToShow = 1;
		var activeSlides = slidesToShow;

		$sliderItems.outerWidth( parseInt($slider.width() / slidesToShow) );
		var itemWidth;
		var itemsWidth;

		function fixWidth() {
			itemWidth = $('.chief-slider .slider-item').outerWidth();
			itemsWidth = itemWidth * itemsNumber;
			$sliderBanner.width(itemsWidth);
		 } fixWidth();

		function leftCalc() {
			return itemWidth * itemMove;
		}

		$(window).resize(function() {
			$sliderItems.outerWidth( parseInt($slider.width() / slidesToShow) );
			fixWidth();
			$sliderBanner.css('left', -leftCalc());
		});

		var left = 0;
		var itemMove = 0;
		var clicked = false;

		function checkStatus() {
			if (activeSlides == itemsNumber) {
				$nextBtn.addClass('disabled');
			} else {
				$nextBtn.removeClass('disabled');
			}

			if (activeSlides == slidesToShow) {
				$prevBtn.addClass('disabled');
			} else {
				$prevBtn.removeClass('disabled');
			}
		} checkStatus();


		$nextBtn.click(function() {
			if (!clicked) {
				if (activeSlides != itemsNumber) {
					clicked = true;
					itemMove++;
					left = -leftCalc();
					$sliderBanner.css('left', left);
					activeSlides++;
					setTimeout(function() {
						clicked = false;
					}, 400);
					checkStatus();
				}
			}
		});

		$prevBtn.click(function() {
			if (!clicked) {
				if (activeSlides > slidesToShow ) {
					clicked = true;
					itemMove--;
					left = -leftCalc();
					$sliderBanner.css('left', left);
					activeSlides--;
					setTimeout(function() {
						clicked = false;
					}, 400);
					checkStatus();
				}
			}
		});

	} chiefSlider();


});