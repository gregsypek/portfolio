//SLIDER
const boxesContainer = document.querySelector('.projects__boxes');
let box;
const projects = [
  {
    id: 1,
    images: 4,
    curSlide: 0,
  },
  {
    id: 2,
    images: 4,
    curSlide: 0,
  },
  {
    id: 3,
    images: 4,
    curSlide: 0,
  },
  {
    id: 4,
    images: 4,
    curSlide: 0,
  },
];

boxesContainer.addEventListener('click', e => {
  clicked = Number(e.target.closest('.projects__box').dataset.box);
  if (!clicked) return;
  box = clicked;
  console.log(box);
});

const slider = function (nr) {
  const box = document.querySelector(`.projects__box--${nr}`);
  const images = box.querySelectorAll('.projects__img');
  const btnLeft = box.querySelector('.projects__icon--left');
  const btnRight = box.querySelector('.projects__icon--right');

  // const dotContainer = document.querySelector('.dots');

  const project = projects.filter(project => project.id === nr);
  let { curSlide } = project[0];
  const maxSlide = project[0].images;

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
    goToSlide(curSlide);
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

//1. check which box was clicked
//2. call function slider with clicked box
