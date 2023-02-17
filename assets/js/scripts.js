const swiper = new Swiper('.swiper', {
    speed: 1000,
    spaceBetween: 80,
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
        waitForTransition: true,
    },
    parallax: true,
    slidesPerView: 'auto',
    centeredSlides: true,
  });