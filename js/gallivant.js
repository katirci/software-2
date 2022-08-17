var swiper = new Swiper(".mySwiper", {
  
  spaceBetween: 30,
  
  loop: true,
  loopFillGroupWithBlank: false,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1300:{
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
    1100:{
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 15,
    },
    900:{
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    700:{
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    540:{
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    
  }
});

