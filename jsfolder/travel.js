const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// console.log(slideWidth);

// arrange the slides next to one another
const setSlidePosition = (slides, index) => {
  slides.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

// When i click on the left button, i want the slide to move to the left

// When i click on th right button, i want the slide to move to the right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;
  // move to the next slide
  track.style.transform = 'translateX(-'+ amountToMove +')';
})