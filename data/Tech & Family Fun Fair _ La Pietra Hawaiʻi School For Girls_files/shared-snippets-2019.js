/* ----------------------------------------------------------------------------------------------------------------------- */
/* HR Replacement -------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
$("hr").each(function () {
    if (!$(this).closest(".hr").length) {
        $(this).wrap('<div class="hr"></div>');
    }
});


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Toggle More ----------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
$(".toggle-more-link a").click(function () {
    if ($(this).closest(".toggle-more-link").hasClass("selected")) {
        $(this).closest(".toggle-more-link").removeClass("selected").next(".toggle-more-content").stop(1,1).slideUp("fast");

    } else {
        $(this).closest(".toggle-more-link").addClass("selected").next(".toggle-more-content").stop(1,1).slideDown("fast");
    }
    return false;
});


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Stop Animation On Scroll ---------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
$(window).on('mousewheel', function () {
    $('html, body').stop();
});


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Filter SelectBox Handler ---------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
if($('.select-filter-wrap select').length || $('#grid_category_id').length) {
	$.when(add_js(shared_root + '/js/jquery/jquery.selectBox/jquery.selectBox.min.js')).done(function () {
		$('.select-filter-wrap select').each(function () {
				$(this).find('option').each(function () {
						if($(this).val() == '') $(this).remove();
						$(this).text($(this).text().replace(/&nbsp;/g, '').replace(/\u00a0/g, ''));
						if ($(this).val().indexOf('o-') >= 0) $(this).text(' --' + $(this).text());
				});
		});

		$(window).load(function () {
			$('.grid-filters-wrap #grid_category_id').selectBox();
			$('.select-filter-wrap select').selectBox();
		});
	});
}

/* ----------------------------------------------------------------------------------------------------------------------- */
/* Responsive Display Table Handling ------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
// display table mobile handling
if($('.display-table').length) {
	var faux_column_headings = [];
	$('.display-table').each(function() {
		$(this).addClass('mobile-handling');
		$(this).find('th').each(function() {
			faux_column_headings.push($(this).text());
		});
	});

	i=0;
	$('.display-table').find('tbody tr').each(function() {
		$(this).find('td').each(function() {
			if(!$(this).html()) $(this).addClass('empty');
			if(faux_column_headings[i] != '' && faux_column_headings[i] != 'Actions') {
				$(this).prepend('<span class="faux-column-label">'+faux_column_headings[i].replace(':','')+':</span>');
			}
			i++;
		});
	});
}


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Background Image for Image Grids -------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
if($('.image-grid-link-items').length) {
	$('.image-grid-link-items .element-item').each(function() {
		if($(this).find('.image-wrap img').length) {
			var imgsrc = $(this).find('.image-wrap img').attr('src').replace('/500', '/1000');
			$(this).find('.image-wrap').css({'background-image': 'url('+imgsrc+')'});
		}
	});
}

if($('.inspiration-gallery-items').length) {
	if($('.row .col').length) {
		$('.inspiration-gallery-items .row .col').each(function() {
			if($(this).find('.image img').length) {
				var imgsrc = $(this).find('.image img').attr('src').replace('/500', '/1000');
				$(this).find('.image').css({'background-image': 'url('+imgsrc+')'});
			}
		});
	}

	if($('.masonry-grid').length) {
		$('.masonry-grid .masonry-item').each(function() {
			if($(this).find('.image img').length) {
				var imgsrc = $(this).find('.image img').attr('src').replace('/500', '/1000');
				$(this).find('.image').css({'background-image': 'url('+imgsrc+')'});
			}
		});
	}
}


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Responsive Content Block Handling (Optional) -------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------------------------------- */
$('.ss-section-wrap-inner').each(function() {
	if($(this).find('.ss-content-block').length == 2) {
		$(this).find('.ss-content-block').each(function() {
			if($(this).find('img').length == 1 && ($(this).find('p').length == 1 || !$(this).find('p').length)) {
				$(this).addClass('ss-image-block').closest('.ss-section-wrap-inner').addClass('has-ss-image-block');
			}
		});
	}
});


/* ----------------------------------------------------------------------------------------------------------------------- */
/* Background Color Class for Content Boxes ------------------------------------------------------------------------------ */
/* ----------------------------------------------------------------------------------------------------------------------- */
$('.ss-content-block').each(function() {
	if($(this).attr('style') && $(this).attr('style').indexOf('background-color') >= 0) {
		$(this).addClass('has-background-color');
	}
	if($(this).attr('style') && $(this).attr('style').indexOf('background-image') >= 0) {
		$(this).addClass('has-background-image');
	}
	if($(this).attr('style') && $(this).attr('style').indexOf('color') >= 0) {
		$(this).addClass('has-text-color');
	}
});