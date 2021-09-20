

// mobile menu
function openFunction(){
	document.getElementById("mobile-nav").style.display="block";
}
function closeFunction(){
	document.getElementById("mobile-nav").style.display="none";
}

// blog-slider
$('.blog-slider').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true

		}
	  }
	]
  });
// data-aos
// AOS.init({
//     offset : 300,
//     duration : 2000,
// });
	// isotop filter

	// $('.grid').imagesLoaded( function(){

		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition:true,
			masonry: {
				coumnWidth: 'grid-item',
			}
		});
		// });
		
		// filter items on btn click
		$('.portfolio-menu').on('click', 'button', function(){
		
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue});
		});
		
		// for menu active class
		$('.portfolio-menu button').on('click', function(event){
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
		});

		// magnefic-popup
		

$('.image-popup').magnificPopup({
  type: 'image'
  // other options
});