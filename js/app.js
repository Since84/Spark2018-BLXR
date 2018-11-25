(function($) {

	$(document).ready(function(){

		function open($elem){
			$elem.addClass('open');
		}

		function close($elem){
			console.log($elem);
			$elem.removeClass('open').removeClass('active');
		}

		function toggle($elem){
			$elem.toggleClass('open')
		}

		function openModal($elem){
			$('.spark-modal.open').removeClass('open');
			open($elem);
			$('body').addClass('spark-modal-open');
		}

		function closeModal($elem){
			close($elem);
			$('body').removeClass('spark-modal-open');
		}

		$('.spark-modal-close').click(function(e){
			closeModal($(e.currentTarget).parents('.spark-modal'));
			var $modal = $('.youtube-modal.open');
			$modal.removeClass('open').find('iframe').removeAttr('src')
		})

		$('.spark-modal-trigger').click(function(e){
			elem = $(e.currentTarget).data('modal-id');
			openModal($(elem));
		})

		$('.accordion-trigger').click(function(e){
			toggle($(e.currentTarget).parents(".accordion-item"));
		})


		$('.accordion-tab-heading').click(function(e){
			var $elem = $(e.currentTarget);
			var index = $elem.attr('data-index');
			if( !$elem.hasClass('active-tab') ){
				$elem.siblings('.active-tab').removeClass('active-tab');
				$('.active-content').removeClass('active-content');

				$('.accordion-tab-heading[data-index='+index+']').addClass('active-tab');
				$('.accordion-tab[data-index='+index+']').addClass('active-content');

			}
		})

		function openMenu(){
			open($('.mobile-menu-button, .spark-nav-basic-menu'));
		}

		function closeMenu(){
			close($('.mobile-menu-button, .spark-nav-basic-menu'));
		}

		function toggleMenu(){
			toggle($('.mobile-menu-button, .spark-nav-basic-menu'));
			$('body').toggleClass('menu-open');
		}

		$('.contact-modal-trigger').click(function(){
			$('.spark-contact-modal-container').addClass('active');
			$('body').addClass('spark-modal-open');
		})


		$('.trigger-youtube-modal').on('click', function(e){
			var id = $(e.currentTarget).parents(".youtube-item").data('id');
			var $modal = $(e.currentTarget).parents('.spark-position-list').find('.youtube-modal');
			$modal.find('iframe').removeAttr('src').attr('src', 'https://www.youtube.com/embed/'+ id +'?autoplay=1');
			$modal.addClass('open');
		})

		$('.youtube-modal .modal-close-button').on('click', function(){
			var $modal = $('.youtube-modal.open');
			$modal.removeClass('open').find('iframe').removeAttr('src')
		})

		$('body').keyup(function(e){
		    if(e.which == 27){
		        var $modal = $('.youtube-modal.open');
				$modal.removeClass('open').find('iframe').removeAttr('src')
		    }
		});

		$('.mobile-menu-button, .spark-menu-button').click(function(){ 
			// Open Menu
			toggleMenu() 
		});

		$('.spark-close-button').click(function(){
			toggleMenu()
		})

		$('.video-container').click(function(e){
			var $video = $(e.currentTarget).find('iframe.video');
			var videoSrc = $video.attr('data-src');

			$video.attr('src', videoSrc);
			$(this).addClass('video-active') 
		})

		$('.spark-profile').each(function(){
			var name = $(this).attr('id');
			var scrollClass = "#" + name + " .perfect-scrollbar";
			var ps = new PerfectScrollbar(scrollClass);
		})

		// Fixed Nav 

		$(window).scroll(function(){
			var scrollPosition = $(window).scrollTop();

			if ( scrollPosition > 10 ) {
				$('.spark-nav-basic').addClass('nav-scrolled');
			} else {
				$('.spark-nav-basic').removeClass('nav-scrolled');
			}
		});

		$(document).mouseup(function(e){
			var container = $(".spark-modal.open");

		    // if the target of the click isn't the container nor a descendant of the container
		    if (!container.is(e.target) && container.has(e.target).length === 0) 
		    {
		        closeModal(container);
		    }
		})

		$('.menu-item-has-children').on('click', function(){
			$(this).toggleClass('open');
		})


		$('.spark-contact-modal-container.active').on('click', function(e){
			if( !$(e.target).hasClass("spark-contact-modal") || jQuery(e.target).parents('.spark-contact-modal').length == 0 ) {
				closeModal($('.spark-contact-modal-container.active'));
			}
		})
	})
})(jQuery);