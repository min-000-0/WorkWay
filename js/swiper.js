import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

const heroSwiper = new Swiper(".hero-swiper", {
  modules: [Pagination, Autoplay],
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 12,
  initialSlide: 0, // 從第一張開始
  freeMode: true, // 讓滑動更順暢
  pagination: {
    el: ".hero-pagination",
    clickable: true,
  },
});

const swiper = new Swiper(".swiper", {
  modules: [Pagination],
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto", // 使用CSS的寬度
  centeredSlides: false,
  initialSlide: 0,
  freeMode: true,
  pagination: {
    el: ".my-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      spaceBetween: 24,
    },
  },

  on: {
    init: function () {
      // 強制設定 wrapper 的 align-items
      this.wrapperEl.style.alignItems = "stretch";
    },
  },
});
