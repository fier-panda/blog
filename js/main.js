'use strict';

document.addEventListener("scroll", menuScroll);


function menuScroll(){

	if (document.documentElement.scrollTop > 10) {
		document.querySelector('.navbar').classList.add('small');
	}else{
		document.querySelector('.navbar').classList.remove('small');
	}

}


function openSearch(){

	var openSearch = document.querySelector('.js-menu-item-search');
	var closeForm = document.querySelector('.js-close-form');
	var searchForm = document.querySelector('.js-search-form');

	openSearch.addEventListener('click', function(event){

		searchForm.classList.toggle("visible")

	});

	closeForm.addEventListener('click', function(event){

		searchForm.classList.toggle("visible")

	});

}

function openMenuMobile(){

	var openMenu = document.querySelector('.js-menu-open');
	var closeMenu = document.querySelector('.js-mask');
	var mobileMenu = document.querySelector('.js-mobile-menu');

	openMenu.addEventListener('click', function(event){

		mobileMenu.classList.toggle("visible");
		document.body.classList.toggle("close");

	});

	closeMenu.addEventListener('click', function(event){

		mobileMenu.classList.toggle("visible");
		document.body.classList.toggle("close");

	});

}

function konamicode(){

	var modal = document.querySelector('.konami-js');
	var close = modal.querySelector('.close');

	var easter_egg = new Konami(function() {

		modal.classList.add('visible');

	});

	close.addEventListener('click', function(){

		modal.classList.remove('visible');

	})


}

function init(){

	openSearch();
	openMenuMobile();
	konamicode();

}

document.addEventListener('DOMContentLoaded', init, false);