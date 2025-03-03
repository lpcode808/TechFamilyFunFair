/* ----------------------------------------------------------------------------------------------------------------------- */
/* Window Scroll Check --------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
$(window).scroll(function() {
	if($(window).scrollTop() > 111) {
		$('body').addClass('scrolled').removeClass('at-top');
	} else {
		$('body').removeClass('scrolled').addClass('at-top');
	}
}).scroll();


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Global Page Checks ---------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
/* Remove bottom padding if page has bottom background */
if($('.ss-section-wrap').length) {
	if($('.main-content .ss-section-wrap').last().css('background-color') != 'rgba(0, 0, 0, 0)' && $('.main-content .ss-section-wrap').last().attr('style') > 0) {
		$('body').addClass('has-bottom-background');
	}
}


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Full Width Image Handling --------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
if($('.full-bleed-image').length) {
	$('.full-bleed-image').each(function() {
		var imgsrc = $(this).find('img').attr('src');
		$(this).css({'background-image': 'url('+imgsrc+')'});
	});
}


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Search Toggle --------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
$('#nav-search').click(function() {
	var form = $(this).closest('form');
	if(form.find('input[name=q]').val()) {
		form.submit();
	} else {
		$('body').toggleClass('search-active');
		if($('body').hasClass('search-active')) {
			setTimeout(function() {
				form.find('.text-input').focus();
			},250);
		}
	}
	return false;
});


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Primary Nav Wrap ------------------------------------------------------------------------------------------------------ */
/* ----------------------------------------------------------------------------------------------------------------------- */
$('#nav-toggle').click(function () {
	$('body').toggleClass('nav-active');
	return false;
});

if($('#primary-nav-wrap').length) {
	$(window).resize(function() {
		$('#primary-nav-wrap > ul > li > a').each(function () {
			if($(this).closest('li').hasClass('sub')) {
				$(this).closest('li').find('>ul').wrap('<div class="drop-wrap"><div class="ul-wrap"></div></div>');

				$(this).closest('li.nav-link-about').find('.drop-wrap').prepend($('#primary-nav-content-about'));
				$(this).closest('li.nav-link-admissions').find('.drop-wrap').prepend($('#primary-nav-content-admissions'));
				$(this).closest('li.nav-link-academics').find('.drop-wrap').prepend($('#primary-nav-content-academics'));
				$(this).closest('li.nav-link-student-life').find('.drop-wrap').prepend($('#primary-nav-content-student-life'));
				$(this).closest('li.nav-link-athletics').find('.drop-wrap').prepend($('#primary-nav-content-athletics'));
				$(this).closest('li.nav-link-giving').find('.drop-wrap').prepend($('#primary-nav-content-giving'));
				$(this).closest('li.nav-link-alumnae').find('.drop-wrap').prepend($('#primary-nav-content-alumnae'));
				$(this).closest('li.nav-link-covid-19').find('.drop-wrap').prepend($('#primary-nav-content-covid-19'));
				$(this).closest('li.nav-link-careers').find('.drop-wrap').prepend($('#primary-nav-content-careers'));
			}

			var nav_description = $(this).closest('li').find('.nav-description');
			((nav_description.length)?$(this).closest('li').find('.drop-wrap').prepend($(nav_description)):'');
			if(!$(this).closest('li').find('.primary-nav-content-wrap').length && !nav_description.length) {
				var nav_template_html = '<div class="nav-description"></div><div class="primary-nav-content-image-wrap"><div class="primary-nav-content-template"><div class="image-wrap"></div></div></div>';
				$(this).closest('li').find('.drop-wrap').prepend(nav_template_html);
			}
		});

		if($('#nav-toggle').css('display') == 'block') {
			$('.primary-nav-wrap > ul li.selected > a').addClass('clicked-once').closest('li').find('ul').first().stop(1,1).slideDown('fast','');
			$('#primary-nav-wrap > ul li > a').click(function() {
				if($(this).closest('li').hasClass('sub')) {
					if(!$(this).hasClass('clicked-once') && !$(this).closest('li').hasClass('selected')) {
						$(this).addClass('clicked-once').closest('li').find('ul').first().stop(1,1).slideDown('fast',function() {
							$(this).closest('li').addClass('selected');
						});
						return false;
					}
				}
			});
			((!$('#primary-nav-wrap > .quick-links').length)?$('#primary-nav-wrap').prepend($('.quick-links')):'');
			if($('#mobile-trigger').css('display') == 'block') {
				((!$('#primary-nav-wrap > .logo').length)?$('#primary-nav-wrap').prepend('<a href="/" class="logo"><img src="/images/template/la-pietra-hawaiis-school-for-girls-logo.svg?v=1.1" alt="La Pietra Hawaii\'s School For Girls"></a>'):'');
			} else {
				($('#primary-nav-wrap > .logo').length)?$('#primary-nav-wrap .logo').remove():'';
			}
		} else {
			(($('#primary-nav-wrap > .logo').length)?$('#primary-nav-wrap > .logo').remove():'');
			((!$('.upper-header .quick-links').length)?$('#logo').after($('.quick-links')):'');
		}

		$('#primary-nav-wrap .primary-nav-content-image-wrap[id]').each(function() {
			if($(this).find('img').length) {
				var imgsrc = $(this).find('img').attr('src');
				$(this).css({'background-image': 'url('+imgsrc+')'})
			}
		});
	});
}


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Homepage -------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
/* Homepage Logo Scroll ---------------------------------------------------------------- */
if ($('body').hasClass('page-index')) {
	$('#logo').click(function () {
		$('html,body').stop(1, 1).animate({ 'scrollTop': '0px' }, 'slow', 'easeInOutQuad');
		return false;
	});
}


/* Homepage Banner & Preloader ------------------------------------------------------ */
if($('.homepage-banner').length) {
	$('.homepage-banner').each(function () {
		$(this).append('<div id="homepage-spinner"><div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div></div></div>');
	});
	$('.homepage-banner').waitForImages(function () {
		$('#homepage-spinner').fadeOut('fast', function () {
			$(this).remove();
		});
		$(this).addClass('loaded');
	});

	setTimeout(function () {
		$('.homepage-banner').addClass('loaded');
	}, 3000);

	$('.embedded-gallery-wrap .image').each(function () {
		var imgsrc = $(this).find('img').attr('src');
		$(this).css({'background-image': 'url("'+imgsrc+'")'});
	});
}


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Secondary Navigation -------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
if($('body').hasClass('has-secondary-nav')) {
	$('#secondary-nav-wrap').wrapInner('<div class="secondary-nav-inner-wrap" id="secondary-nav-inner-wrap"></div>');

	$('#secondary-nav-wrap > ul li.selected > a').addClass('clicked-once').closest('li').find('>ul').css({'display': 'block'});
	$('#secondary-nav-wrap > ul li.sub > a').click(function() {
		if(!$(this).hasClass('clicked-once') && !$(this).closest('li').hasClass('selected')) {
			$(this).addClass('clicked-once').closest('li').find('>ul').stop(1,1).slideDown('fast',function() {
				$(this).closest('li').addClass('selected');
			});
			return false;
		}
	});

	setTimeout(function () {
		$(window).resize(function() {
			if($('#side-box').length) {
				if($('#nav-toggle').css('display') == 'block') {
					$('#middle-area .main-content').append($('#side-box'))
				} else {
					$('#secondary-nav-inner-wrap').append($('#side-box'));
				}
			}

			if($('#nav-toggle').css('display') == 'none') {
				var min_height = 0;
				var middle_area_height = $('#middle-area > .main-content').outerHeight();
				var right_side_height = $('#secondary-nav-inner-wrap').outerHeight();
				min_height = (middle_area_height > right_side_height?middle_area_height:right_side_height);
				min_height += 60;
				$('#middle-area > .wrapper').css({'min-height': min_height+'px'});

			} else {
				$('#middle-area > .wrapper').css({'min-height': ''});
			}
		}).resize();
	}, 100);
}

/* ----------------------------------------------------------------------------------------------------------------------- */
/* Page Types Handling --------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
if($('.list-items').length) {
	$('.list-items li').each(function() {
		var parent = $(this).closest('ul');

		/* ------------------------------- */
		/* Blog Page --------------------- */
		/* ------------------------------- */
		if(parent.hasClass('blog-items')) {
			(($(this).find('.thumbnail').length)?$(this).addClass('has-thumbnail'):'');
			$(this).find('.content').append($(this).find('.blog-item > p'));
		}

		/* ------------------------------- */
		/* Member Directory Page --------- */
		/* ------------------------------- */
		if(parent.hasClass('member-directory-items')) {
			var href = $(this).find('a[title="View Profile"]').attr('href');
			var imgsrc = $(this).find('.image img').attr('src');
			$(this).find('.image').css({'background-image': 'url('+imgsrc+')'});
			$(this).click(function() {
				window.location.href = href;
			});
		}

		/* ------------------------------- */
		/* FAQ --------------------------- */
		/* ------------------------------- */
		if(parent.hasClass('question-items')) {
			var title = $(this).find('h2').text();
			(($(this).find('h2').length)?$(this).find('h2').html('<h3>'+title+'</h3>'):'');
		}

		/* ------------------------------- */
		/* FAQ --------------------------- */
		/* ------------------------------- */
		if(parent.hasClass('resource-items')) {
			if($(this).find('.file-wrap').css('background-image') == 'url("http://clients2.sosimplecms.com/images/shared/filetypes/pdf.png")'
			|| $(this).find('.file-wrap').css('background-image') == 'url("http://clients2.sosimplecms.com/images/shared/filetypes/url.png")'
			|| $(this).find('.file-wrap').css('background-image') == 'url("http://clients2.sosimplecms.com/images/shared/filetypes/xlsx.png")') {
				$(this).addClass('no-icon-uploaded');
			}
		}
	});
}

if($('.detail-page.blog').length) {
	$('.detail-page.blog .prev-next-link-wrap a').each(function() {
		var new_html = $(this).find('.post-title').html().replace(':','');
		$(this).find('.post-title').html(new_html);
	});
}

/* ------------------------------- */
/* Form Builder ------------------ */
/* ------------------------------- */
if($('body').hasClass('page-type-8'))  {
	if(!$('.submission-form-wrap.has-driving-directions').length) {
		$('body').addClass('no-driving-directions');
	}

	$('#main-submission-form .form-section').each(function() {
		var field_wrap_count = $(this).find('.field-wrap').length;
		var con_count = $(this).find('.conditional-field').length;

		if(field_wrap_count == con_count) {
			$(this).addClass('conditional-section');
		}
	});

	setInterval(function() {
		$('.conditional-section').each(function() {
			var field_wrap_count = $(this).find('.field-wrap').length;
			var hidden_count = $(this).find('.field-wrap').not(':visible').length;
			if(field_wrap_count != hidden_count) {
				$(this).addClass('visible');
			} else {
				$(this).removeClass('visible');
			}
		});
	},250);
}


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Equal Heights --------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
if($('body').hasClass('page-id-38231')) {
	$('.ss-section-wrap').each(function() {
		if($(this).find('.ss-content-block').length == 2) {
			$(this).find('.ss-content-block').each(function () {
				if($(this).find('.image-name-template').length) {
					$(this).addClass('image-block');
					$(this).closest('.ss-section-wrap').addClass('equal-heights').addClass('clear');
					if($(this).index() == 0) $(this).closest('.ss-section-wrap').addClass('image-is-first');
				} else {
					$(this).addClass('text-block');
				}
			});
		}

		if($(this).find('.ss-content-block').last().hasClass('image-block')) {
			$(this).find('.ss-content-block').last().addClass('last');
		}
	});

	if($('.image-block').length) {
		$(window).resize(function () {
			$('.image-block.last').each(function () {
				var image_block = $(this);

				if($('#mobile-trigger').css('display') == 'block' || $('#mobile-trigger').css('display') == 'inline-block') {
					// window size < 768px
					$(this).closest('.ss-section-wrap-inner').prepend($(image_block));
				} else {
					// window size > 768px
					$(this).closest('.ss-section-wrap-inner').append($(image_block));
				}
			});
		});
	}
}


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Social Media Icon Hover Effect ---------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
$('.footer-right-side > ul li').hover(
	function () {
		if($(this).find('img').length) {
			var img = $(this).find('img');
			var src = img.attr('src');
			if (src.indexOf('-hover.svg') == -1) {
				img.attr('src', src.replace('.svg', '-hover.svg'));
			}
		}
	},
	function () {
		if($(this).find('img').length) {
			var img = $(this).find('img');
			var src = img.attr('src');
			if (src.indexOf('-hover.svg') >= 0) {
				$(img).attr('src', src.replace('-hover.svg', '.svg'));
			}
		}
	}
);


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Filter SelectBox Handler ---------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
/*
if($('select').length) {
	$.when(add_js(shared_root + '/js/jquery/jquery.selectBox/jquery.selectBox.min.js')).done(function () {
		$(window).load(function () {
			$('select').each(function() {
				$(this).selectBox();
			});
		});
	});
}
*/


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Content Feed - Add class for thumbnail -------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
if($('.content-box-list').length) {
	$('.content-box-list').each(function() {
		if($(this).hasClass('blog')) {
			$(this).find('li').each(function (){
				if($(this).find('.thumbnail').length) {
					$(this).find('a').addClass('has-thumbnail');
				}
			});
		}
	});
}


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Content Feeds --------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
var slick_sliders_arr = [];
if($('.content-box-list').length) {
	$('.content-box-list').each(function() {
		var parent = $(this);
		if($(this).hasClass('events')) {
			var calendar_path = '';
			$(this).find('> li').each(function() {
				if(calendar_path == '') {
					var href = $(this).find('a').first().attr('href');
				 	if(href.indexOf('/') == 0) calendar_path = href.substr(0, href.lastIndexOf("/"));
				}
			});
			if(calendar_path) {
				$(this).append('<div class="calendar-link-wrap"><a class="link-text" href="'+calendar_path+'">Full Calendar</a></div>');
			}
		}
		
		if(parent.hasClass('blog') || parent.hasClass('news')) {
			$(this).find('>li').each(function() {
				if($(this).find('.thumbnail').length) {
					var imgsrc = $(this).find('img').attr('src');
					$(this).find('.thumbnail').css({'background-image': 'url('+imgsrc+')'});
					$(this).addClass('has-thumbnail');
					$(this).find('a').wrapInner('<span class="content-wrap"></span>');
					$(this).find('a').prepend($(this).find('.thumbnail'));
				}
			});

			if(parent.closest('.ss-content-block').hasClass('meet-content-feed')) {
				var slick_slider_obj = [];
				slick_slider_obj.container = parent;
				slick_slider_obj.params = {
					arrows: false,
					autoplay: true,
					autoplaySpeed: 1500,
					dots: false,
					slidesToShow: 2,
					slidesToScroll: 1,
					speed: 1000,
					responsive: [
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 1
							}
						}
					]
				};
				slick_sliders_arr.push(slick_slider_obj);
			}

			if(parent.closest('.ss-content-block').hasClass('blog-slider')) {
				var slick_slider_obj = [];
				slick_slider_obj.container = parent;
				slick_slider_obj.params = {
					arrows: true,
					dots: false,
					slidesToShow: 2,
					slidesToScroll: 1,
					speed: 1000,
					responsive: [
						{
							breakpoint: 1190,
							settings: {
								slidesToShow: 1
							}
						}
					]
				};
				slick_sliders_arr.push(slick_slider_obj);
			}
		}
	});
}

if($('.image-link-slider').length) {
	$('.image-link-slider .ss-section-wrap-inner').each(function() {
		var slick_slider_obj = [];
		slick_slider_obj.container = $(this);
		slick_slider_obj.params = {
			arrows: false,
			autoplay: true,
			autoplaySpeed: 1500,
			dots: false,
			slidesToShow: 3,
			centerMode: true,
			centerPadding: '180px',
			speed: 1500,
			responsive: [
				{
					breakpoint: 1300,
					settings: {
							centerPadding: '135px'
					}
				},
				{
					breakpoint: 1024,
					settings: {
							slidesToShow: 2,
							centerPadding: '90px'
					}
				},
				{
					breakpoint: 768,
					settings: {
							slidesToShow: 2,
							centerPadding: '45px'
					}
				},
				{
					breakpoint: 550,
					settings: {
							slidesToShow: 1,
							centerPadding: '0'
					}
				}
			]
		};

		slick_sliders_arr.push(slick_slider_obj);
	});
}

if(slick_sliders_arr.length) {
	add_css(shared_root + '/js/jquery/jquery.slick/slick.css');
	$.when(
		add_js(shared_root + '/js/jquery/jquery.slick/slick.min.js', 1)
	).done(function () {
		for(i=0;i<slick_sliders_arr.length;i++) {
			$(slick_sliders_arr[i].container).slick(slick_sliders_arr[i].params);
		}
	});
}

if($('.content-box-list.events').length) {
	$('.content-box-list.events li > a').click(function() {
		if(!$(this).attr('target') || $(this).attr('target') != '_blank') {
			var url = $(this).attr('href');
			$.ajax({
				type: "GET",
				url: url+(url.indexOf('?') >= 0?'&':'?')+'no_template=1',
				success: function(html,textStatus) {
					showSoSimpleOverlay(html);
					$('.sosimple-overlay').addClass('calendar-item');
					$('body').addClass('overlay-visible');
				}
			});
			return false;
		}
	});
}

// Set main content height & trigger one resize for all on load
$(window).load(function(){ $(window).resize(); })

setTimeout(function() {
	$('body').addClass('loaded');
},1000);