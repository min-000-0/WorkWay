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
  speed: 800,
  initialSlide: 0, // 從第一張開始
});

const storyswiper = new Swiper(".story-swiper", {
  modules: [Pagination],
  loop: true,
  spaceBetween: 0,
  slidesPerView: "auto", // 使用CSS的寬度
  centeredSlides: false,
  initialSlide: 0,
  freeMode: true, // 讓滑動更順暢
  pagination: {
    el: ".my-pagination",
    clickable: true,
  },

  on: {
    init: function () {
      // 強制設定 wrapper 的 align-items
      this.wrapperEl.style.alignItems = "stretch";
    },
  },
});

let serviceSwiper;
const mq = window.matchMedia("(min-width: 992px)");

function toggleServiceSwiper(e) {
  if (e.matches) {
    // 桌面：銷毀
    if (serviceSwiper) {
      serviceSwiper.destroy(true, true);
      serviceSwiper = null;
    }
  } else {
    // 手機：啟動
    if (!serviceSwiper) {
      serviceSwiper = new Swiper(".service-swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        initialSlide: 0,
        freeMode: true,
        pagination: {
          el: ".service-swiper .swiper-pagination",
          clickable: true,
        },
      });
    }
  }
}

toggleServiceSwiper(mq);
mq.addEventListener("change", toggleServiceSwiper);
