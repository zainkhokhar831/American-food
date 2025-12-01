// components/animation.js
const scrollElements = document.querySelectorAll('.animate-fade, .animate-left, .animate-right, .animate-scale');

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (element) => {
  element.classList.add('active');
};

const hideScrollElement = (element) => {
  element.classList.remove('active');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});
window.addEventListener('load', () => {
  handleScrollAnimation();
});
