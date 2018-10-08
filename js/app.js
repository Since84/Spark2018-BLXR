(function($) {

	$(document).ready(function(){

		function open($elem){
			$elem.addClass('open');
		}

		function close($elem){
			$elem.removeClass('open');
		}

		function toggle($elem){
			$elem.toggleClass('open')
			$('body').toggleClass('menu-open');
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

		}

		$('.contact-modal-trigger').click(function(){
			$('.spark-contact-modal').addClass('active');
		})


		$('.trigger-youtube-modal').on('click', function(e){
			var id = $(e.currentTarget).parents(".youtube-item").data('id');
			var $modal = $('.youtube-modal');
			$modal.find('iframe').removeAttr('src').attr('src', 'https://www.youtube.com/embed/'+ id +'?autoplay=1');
			$modal.addClass('open');
		})

		$('.youtube-modal svg').on('click', function(){
			var $modal = $('.youtube-modal');
			$modal.removeClass('open').find('iframe').removeAttr('src')
		})

		$('body').keyup(function(e){
		    if(e.which == 27){
		        var $modal = $('.youtube-modal');
				$modal.removeClass('open').find('iframe').removeAttr('src')
		    }
		});

		$('.mobile-menu-button').click(function(){ 
			// Open Menu
			toggleMenu() 
		});

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

		$(document).mouseup(function(e){
			var container = $(".spark-modal.open");

		    // if the target of the click isn't the container nor a descendant of the container
		    if (!container.is(e.target) && container.has(e.target).length === 0) 
		    {
		        closeModal(container);
		    }
		})
	})
})(jQuery);