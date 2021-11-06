$(function() {


//slider-1**********//
	$('.header-content-left-subtitle').slick({
	  responsive: [
	    {
	      breakpoint: 2048, 
	      settings: 
	        "unslick",
	    },
	    {
	      breakpoint: 481, 
	      settings: {
	      	infinite: false,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows:true,
	        dots:true,
	      }
	    }
	  ],
	});


//mobile-menu**********//
let mobileWrappers = document.querySelectorAll('.mobile-wrapper');
let mobileModal = document.querySelector('.mobile-modal');
let headerPhone = document.querySelector('.header-phone');

for (let mobileWrapper of mobileWrappers) {
	mobileWrapper.onclick = function() {
	mobileModal.classList.toggle('open');
	};
};


//slider-2**********//
$('.third-inner').slick({
  responsive: [
    {
      breakpoint: 2048, 
      settings: 
        "unslick",
    },
    {
      breakpoint: 481, 
      settings: {
      	infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
      }
    }
  ],
});


//slider-3**********//
$('.fourth-inner').slick({
  dots: true,
  arrows: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    }
  ]
});


//scroll**********//
let scrolls = document.querySelectorAll('[data-scroll]');

for (let scroll of scrolls) {
  scroll.onclick = function (evt) {
    evt.preventDefault();
    let dataId = scroll.getAttribute('data-scroll');
    document.querySelector(dataId).scrollIntoView({ block: "start" });
    mobileModal.classList.remove('open');
  };
};


//scroll-active-menu**********//  //fixed-menu**********//
let headerMenu = document.querySelector('.header-menu');

window.onscroll = function() {
	if (pageYOffset>200) {
		headerMenu.classList.add('fixed');
	} else {
		headerMenu.classList.remove('fixed');
	};


let scrollDistance = window.scrollY;
let section = document.querySelectorAll('.section');
let mainMenuLink = document.querySelectorAll('.main-menu-link');

	section.forEach((el, i) => {
		if (el.offsetTop - headerMenu.clientHeight <= scrollDistance) {
			mainMenuLink.forEach((el) => {
				if (el.classList.contains('active')) {
					el.classList.remove('active');
				};
			});
			mainMenuLink[i].classList.add('active');
		};
	});
};


//Выбор авто**********//
let thirdItems = document.querySelectorAll('.third-item');



for (let thirdItem of thirdItems) {
	thirdItem.onclick = function() {
		thirdItems.forEach((el, i) => {
			if (el.classList.contains('active')) {
				el.classList.remove('active');
			}
			thirdItem.classList.add('active');
		});

	};
};


//modal windows**********//
let openModals = document.querySelectorAll('.open-modal');
let firstModal = document.querySelector('.first-modal');
let secondModal = document.querySelector('.second-modal');
let btnModal = document.querySelector('.btn-modal');
let body = document.querySelector('body');

for (let openModal of openModals) {
	openModal.onclick = function() {
		firstModal.classList.remove('hidden');
		body.classList.add('no-scroll');
	};
};

btnModal.onclick = function() {
	firstModal.classList.add('hidden');
	secondModal.classList.remove('hidden');
	setTimeout(function() {
		secondModal.classList.add('hidden');
		body.classList.remove('no-scroll');
	}, 3000);
};
















});

