// Swiper slider setup
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
const swiper2 = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  });
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true
  });
  const swiper3 = new Swiper('.swiper-3', {
    slidesPerView: 4,
    slidesPerGroup: 4, 
    spaceBetween: 40,
    loop: true,
    speed: 800,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  document.addEventListener('DOMContentLoaded', () => {
    const swiper3 = new Swiper('.swiper-3', {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
      loop: true,
      loopFillGroupWithBlank: true,
      speed: 800,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
  
  
  
  
  
 
  
  
  