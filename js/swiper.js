// index
// hero-swiper
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

const heroSwiper = new Swiper(".hero-swiper", {
  modules: [Autoplay],
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 12,
  speed: 800,
});

// story-swiper
const storyswiper = new Swiper(".story-swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: -8, //間距16px
  breakpoints: {
    992: {
      spaceBetween: 0, //間距24px
    },
  },
});

// service-swiper
const serviceSwiper = new Swiper(".service-swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  breakpoints: {
    992: {
      enabled: false,
    },
  },
});

// about
// partner-swiper
const partnerswiper = new Swiper(".partner-swiper", {
  slidesPerView: "auto",
  // slidesOffsetAfter: 24,
});
