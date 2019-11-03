// ------------------------------------------------------------------------------------
// --- Fullpage.js
// --- 
// ------------------------------------------------------------------------------------

var myFullpage = new fullpage('#fullpage', {
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors:['about-me', 'experience', 'project', 'contact-me'],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['', ''],
	showActiveTooltip: false,
	slidesNavigation: true,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: true,
	scrollingSpeed: 1000,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: true,
	loopTop: false,
	loopHorizontal: false,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: true,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: true,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: false,
	verticalCentered: true,
	sectionsColor : ['#2d2e2d', '#60c0e6', '#56b04d', '#eb9d38'],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: true,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//events
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}

});

// ------------------------------------------------------------------------------------
// --- Tutoriel jQuery
// ------------------------------------------------------------------------------------

$(function(){

	// Console Test
	//console.log("Fuck jQuery");

	// Bouton Tutoriel : Afficher
	$("#showTuto").click(function() {

		//console.log("Click On : #showTuto");
		$("#tutorial").fadeIn("slow");
	});

	// Bouton Tutoriel : Fermer
	$("#hideTuto").click(function() {

		//console.log("Click On : #hideTuto");
  		$("#tutorial").fadeOut("slow");
	});

});