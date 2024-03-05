// CHANGING NAV ITEMS COLOR WHEN HEADER ENDS

const nav = document.querySelector("nav");
const header = document.querySelector("header");
const navHeight = nav.getBoundingClientRect().height;

function updateNavColor(entries) {
  const [entry] = entries;
  if(!entry.isIntersecting) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
  
}

const headerObserver = new IntersectionObserver(updateNavColor, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});

headerObserver.observe(header);


// SWIPER JS -------------------

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// SMOOTH SCROLLING


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// Inquire Block 

$("#inquire").click(function() {
  $("#contact").toggle();
})

