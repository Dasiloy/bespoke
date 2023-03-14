// THIS IS FOR ACCORDION LOGIC
const accordions = document.querySelectorAll('.accordion');

function handleAccordionClick(e) {
  this.classList.toggle('is-open');

  let content = this.nextElementSibling;
  if (content.style.maxHeight) {
    //this is if the accordion is open
    content.style.maxHeight = null;
  } else {
    //if the accordion is currently closed
    content.style.maxHeight = `${content.scrollHeight}px`;
  }
}

Array.from(accordions).forEach(accordion => {
  accordion.addEventListener('click', handleAccordionClick);
});

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
});

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById('mySidenav').style.width = '270px';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

//THIS LOGIC IS FOR TESTIMONIALS SLIDES
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.testimonial-dot');

function init() {
  slides[currentSlide].style.display = 'block';
  dots[currentSlide].classList.add('active');
}
init();

function reset() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    dots[i].classList.remove('active');
  }
}

// autoplay slides
function slideShow() {
  reset();
  slides[currentSlide].style.display = 'block';
  dots[currentSlide].classList.add('active');
  currentSlide++;

  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
}

function toSlide(n) {
  reset();
  clearInterval(slideShow);
  slides[n].style.display = 'block';
  dots[n].classList.add('active');
  currentSlide = n;
  setInterval(slideShow, 5000);
}

setInterval(slideShow, 5000);

Array.from(dots).forEach((dot, index) => {
  dot.addEventListener('click', () => {
    toSlide(index);
  });
});
