const hamburgerElement = document.querySelector("#myButton"); //button element
const navElement = document.querySelector(".menuLinks"); //ul element

hamburgerElement.addEventListener("click", () => {
  hamburgerElement.classList.toggle("open");
  navElement.classList.toggle("open");
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1500,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 5000,
  },
});
