var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop:true,

  });
  var swiper = new Swiper(".mySwiperTabs", {
          slidesPerView: 3,
          loop:true,
          cssMode: true,
           autoplay: {
          delay: 5500,
          disableOnInteraction: false,
          },
          
          });