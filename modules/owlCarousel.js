const slider = $(".slider-wrapper").owlCarousel({
  loop: false,
  margin: 20,
  nav: true,
  lazyload: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 5,
      nav: false,
      loop: true,
    },
  },
});
slider.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    slider.trigger("next.owl");
  } else {
    slider.trigger("prev.owl");
  }
  e.preventDefault();
});


const beritaSlider = $(".berita-slider").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  lazyload: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
      loop: true,
    },
  },
});
beritaSlider.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    beritaSlider.trigger("next.owl");
  } else {
    beritaSlider.trigger("prev.owl");
  }
  e.preventDefault();
});


const modalSlider = $(".modal-image").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  lazyload: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: true,
      loop: true,
    },
  },
});
modalSlider.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    modalSlider.trigger("next.owl");
  } else {
    modalSlider.trigger("prev.owl");
  }
  e.preventDefault();
});
