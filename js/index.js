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
  document.getElementById("mySidenav").style.width = "270px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
