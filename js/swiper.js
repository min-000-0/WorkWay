import Swiper from "swiper";
import { Pagination } from "swiper/modules";

const swiper = new Swiper(".swiper", {
  modules: [Pagination],
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto", // 使用CSS的寬度
  centeredSlides: false,
  initialSlide: 0, // 從第一張開始
  freeMode: true, // 讓滑動更順暢
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
