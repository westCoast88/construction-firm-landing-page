const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 80,
    loop: true,
    speed: 300,
    autoplay: {
      delay: 5000,
    },
    // пагинация
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    // навигация
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      hide: true,
    },
});
