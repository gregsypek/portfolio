//SLIDER

const slider = function () {
  const box = document.querySelector('.projects__box--1');
  const images = box.querySelectorAll('.projects__img');
  const btnLeft = box.querySelector('.projects__icon--left');
  const btnRight = box.querySelector('.projects__icon--right');

  // const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = images.length;

  const goToSlide = function (slide) {
    images.forEach(
      (s, i) => (s.style.transform = `translateY(${-100 * (i - slide)}%)`)
    );
  };

  //Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else curSlide++;
    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else curSlide--;
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };

  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  //   dotContainer.addEventListener('click', function (e) {
  //     if (e.target.classList.contains('dots__dot')) {
  //       const { slide } = e.target.dataset;
  //       goToSlide(slide);
  //       activateDot(slide);
  //     }
  //   });
  // };
  // slider();
};
slider();
