//Underline tab
$(function() {
  $('a.underline').click(function() {
      $('a.underline').removeClass('current');
      $(this).addClass('current');
  });
});


// Fade animation
AOS.init({
        offset: 30,
        delay: 0,
        duration: 1000 
      });


// Burger menu
function burger() {
  var navUl = document.getElementById("navigation-bar-ul");
  if (navUl.style.display === "block") {
      navUl.style.display = "none"
      

  } else {
      navUl.style.display = "block";
  }
  }


  function scrolldiv() { 

    var xul = document.getElementById("navigation-bar-ul");
    const mediaQuery = window.matchMedia('(max-width: 700px)') 

    if (mediaQuery.matches) {

    xul.style.display = "none"; 
    }

} 


// Smooth Scroll
$('#navigation-bar a, .btn1, #logo, #btn-top').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top -68
            },
      800
    );
  }
});
// Shrink logo
window.onscroll = function() {
  growShrinkLogo()
};


var Logo = document.getElementById("logo");
var navbar = document.getElementById("navigation-bar")
var navUl = document.getElementById("navigation-bar-ul")
var topbar = document.getElementById("btn-top")
var endOfDocumentTop = 535
var size = 0;

function growShrinkLogo() {
var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (size == 0 && scroll > endOfDocumentTop)
 {
    Logo.className = 'smallLogo';
    navbar.className = 'navbar-custom';
    navUl.className = 'navbar-ul-custom';
    topbar.style.display = 'block';
    size = 1;
  } else if(size == 1 && scroll <= endOfDocumentTop){
    Logo.className = 'largelogo';
    navbar.className = 'navbar';
    navUl.className = 'navbar-ul';
    topbar.style.display = 'none';
   size = 0;
  }
}






// Date & Greeting
//Time
function getTime( ) {
	var d = new Date( ); 
	d.setHours( d.getHours() ); 
	var h = (d.getHours() % 12) || 12; 
	return (
		( h < 10 ? '0' : '') + h +
		( d.getMinutes() < 10 ? ':0' : ':') + d.getMinutes() +
		( d.getHours() < 12 ? ' AM' : ' PM' )
	);
}
var clock = document.getElementById('time');
setInterval( function() { clock.innerHTML = getTime(); }, 1000 );
// Greeting 
new Date().toLocaleTimeString();
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = ' Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = ' Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = ' Evening';

    document.getElementById('greet').innerHTML =
        '<b>' + greet + '</b>';;

// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 100;

    if(this.isDeleting) {
      typeSpeed /= 5;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}


// Testimonials 
const slideDelay = 5000;

const dynamicSlider = document.getElementById("slider");

var curSlide = 0;
window.setInterval(()=>{
  curSlide++;
  if (curSlide === dynamicSlider.childElementCount) {
    curSlide = 0;
  }

  // Actual slide
  dynamicSlider.firstElementChild.style.setProperty("margin-left", "-" + curSlide + "00%");
}, slideDelay);