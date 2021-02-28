// const { easing } = require("jquery");

const btnToggle = document.querySelector('.btn-toggle');
const menuIcon = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');
const mobileNav = document.querySelector('.mobile-nav');
const btnProfile = document.querySelector('.btn-user-profile');
const userMenu = document.querySelector('.user-menu');
const navbar = document.querySelector('#navbar');
const navigation = document.querySelectorAll('.navigation a')

function navbarScroll() {
  if (this.scrollY >= 20) {
    navbar.classList.remove("lg:bg-blur-xs", "py-2");
    navbar.classList.add("lg:bg-blur-lg");
    mobileNav.classList.replace("pt-20", "pt-16");

    if (this.scrollY >= 765) {
      navbar.classList.add("bg-akana-green", "bg-opacity-70");
      mobileNav.classList.add("bg-akana-green", "bg-opacity-70");
      // navigation.forEach(n => {
      //   n.classList.replace("text-gray-300", "text-akana-green");
      //   n.classList.replace("hover:text-white", "hover:text-green-900");
      //   n.classList.replace("bg-blur-lg", "bg-blur-2xl");
      // });
    } else {
      navbar.classList.remove("bg-akana-green", "bg-opacity-70");
      mobileNav.classList.remove("bg-akana-green", "bg-opacity-70");
      // navigation.forEach((n) => {
      //   n.classList.replace("text-akana-green", "text-gray-300");
      //   n.classList.replace("hover:text-green-900", "hover:text-white");
      //   n.classList.replace("bg-blur-2xl", "bg-blur-lg");
      // });
    }

  } else {
    navbar.classList.remove("lg:bg-blur-lg");
    navbar.classList.add("lg:bg-blur-xs", "py-2");
    mobileNav.classList.replace("pt-16", "pt-20");
  }
}

window.onscroll = navbarScroll;

btnToggle.addEventListener('click', function() {
  if (closeIcon.classList.contains('hidden')) {
    closeIcon.classList.remove('hidden')
    menuIcon.classList.add('hidden')
    mobileNav.classList.remove('-translate-y-full');
    mobileNav.classList.add('translate-y-0', 'pt-20');
    mobileNav.classList.replace('opacity-0', 'opacity-100');
    window.onscroll = navbarScroll;
  } else {
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    mobileNav.classList.add('-translate-y-full');
    mobileNav.classList.remove('translate-y-0');
    mobileNav.classList.replace("opacity-100", "opacity-0");
  }
});

// Owl Carousel

$(document).ready(function () {
  let owl = $("#owl-one");
  owl.owlCarousel({
    items: 1,
    autoWidth: true,
    loop: true,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    smartSpeed: 500,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  let owl2 = $("#owl-two");
  owl2.owlCarousel({
    autoWidth: true,
    dots: false,
    margin: 48,
    responsive: false,
    nav: true,
    navContainer: 'nav-popular',
    // onInitialized: srPopular,
  })

  $('.next').on('click', function() {
    owl2.trigger('next.owl.carousel');
  })

  $('.prev').on('click', function() {
    owl2.trigger('prev.owl.carousel');
  })

  checkClasses();
  owl.on("translated.owl.carousel", function (event) {
    checkClasses();
  });

  function checkClasses() {
    var total = $("#owl-one.owl-carousel .owl-stage .owl-item.active").length; // nested class from activator class
    $("#owl-one.owl-carousel .owl-stage .owl-item .item").addClass("opacity-60"); // nested class from activator class and remove first and last class if already added.
    let headerTitle = $('header .header-title');

    $("#owl-one.owl-carousel .owl-stage .owl-item.active").each(function (index) { // nested class from activator class
      if (index === 0) { // this is the first one
        $(this).children().removeClass("opacity-60"); // add class in first item
        let text = $(this).children().children().first().text();
        headerTitle.css('opacity', '0');
        setTimeout(() => {
          requestAnimationFrame(() => {
            headerTitle.html(text);
            headerTitle.css('opacity', '1');
          });
        }, 225);
        
      } else if (index === total - 1 && total > 1) {
        $(this).children().addClass("opacity-60");
      } else {
        $(this).children().addClass("opacity-60");
      }
    });
  }

  // Waypoints - Count Number From Zero

  Number.isInteger = Number.isInteger || function (value) {
    return typeof value === 'number' &&
      isFinite(value) &&
      Math.floor(value) === value;
  };

  let waypoint = new Waypoint({
    element: document.querySelector('.count'),
    handler: function () {
      $('.count').each(function () {
        var $this = $(this);
        let isInt = Number($this.text());
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
          duration: 1600,
          easing: 'swing',
          step: function () {
            text = Number.isInteger(isInt) ? Math.ceil(this.Counter) : this.Counter.toFixed(3);
            $this.text(text);
          }
        });
      });

      this.destroy();
    },
    offset: 'bottom-in-view'
  })


  // Scroll Reveal
  ScrollReveal({ reset: true });
  ScrollReveal().reveal('.title-package', { delay: 300, easing: 'ease-out' });
  ScrollReveal().reveal('.item-package', { delay: 400, easing: 'ease-out', scale: 0.9 });
  ScrollReveal().reveal('#owl-two', { delay: 200, interval: 400, distance: '100px', origin: 'bottom',  easing: 'ease-out' });
  ScrollReveal({
    reset: false
  }).reveal('.btn-after-type', {
    delay: 4500,
    scale: 0.9,
    easing: 'ease-out'
  });

  // Waypoints - Typed.js
  let waypoint2 = new Waypoint({
    element: document.querySelector('.typed'),
    handler: function () {
      var typed = new Typed('.typed', {
        stringsElement: '#typed',
        typeSpeed: 30,
        startDelay: 1200,
      });

      this.destroy();
    },
    offset: 'bottom-in-view'
  })
});



















// Disabled for unknown bug

// function srPopular() {
//   ScrollReveal({
//     reset: false
//   }).reveal('.popular .item', {
//     // container: '#owl-two',
//     delay: 200,
//     interval: 400,
//     distance: '120px',
//     origin: 'bottom',
//     easing: 'ease-in-out'
//   });
// }


// Optional Animate Count

function animate_count($el, duration, prefix, postfix, is_decimal) {
	prefix = prefix || '';
	postfix = postfix || '';
	is_decimal = is_decimal || false;

	var text = $el.text().replace(/[^0-9]/g, '')

	jQuery({ counter: 0 }).animate({ counter: parseInt(text) }, {
		duration: 1250,
		easing: 'swing',
		step: function () {
			text = is_decimal ? Math.ceil(this.counter) / 100 : Math.ceil(this.counter);
			$el.text(prefix + text + postfix);
		}
	});
}
















  // owl.on("mousewheel", ".owl-stage", function (e) {
  //   if (e.deltaY > 0) {
  //     owl.trigger("next.owl");
  //   } else {
  //     owl.trigger("prev.owl");
  //   }

  //   e.preventDefault();
  // });

  // owl.on("changed.owl.carousel", function() {
  //   // $(".owl-item.active").first().children().removeClass("opacity-60");
  //   $(".owl-item").children().addClass('opacity-60');
  //   $(".owl-item .first").removeClass('opacity-60');
  //   $(".owl-item.cloned .first").addClass('opacity-60');
  //   $(".owl-item.active").next().first().children().removeClass('opacity-60');
  //   $(".owl-item.active").first().children().removeClass('opacity-60');
  // });






// btnProfile.addEventListener('click', function() {
//   userMenu.classList.toggle('hidden');
// });

// btnProfile.addEventListener('blur', function() {
//   userMenu.classList.add('hidden');
// });

