const swiper = new Swiper('.swiper-personagens', {
  // Opções do Swiper
  loop: true, // Loopar slides
  slidesPerView: 12, // Exibir 12 slides por vez
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0:{
      slidesPerView:4,
    },
    576:{
      slidesPerView:6,
    },
    768:{
      slidesPerView:8,
    },
    1024:{
      slidesPerView:10,
    },
    1200:{
      slidesPerView:12,
    }
  }
});
