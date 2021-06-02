//SLIDER

const boxesContainer = document.querySelector('.projects__boxes');

const projects = [
  {
    id: 0,
    images: 4,
    curSlide: 0,
  },
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
];
// const goToSlide = function (slide, images) {
//   images.forEach(
//     (s, i) => (s.style.transform = `translateY(${-100 * (i - slide)}%)`)
//   );
// };
// const nextSlide = function (curSlide, maxSlide, images) {
//   if (curSlide === maxSlide - 1) {
//     curSlide = 0;
//   } else curSlide++;
//   goToSlide(curSlide, images);
// };

// const prevSlide = function (curSlide, maxSlide, images) {
//   if (curSlide === 0) {
//     curSlide = maxSlide - 1;
//   } else curSlide--;
//   goToSlide(curSlide, images);
// };

boxesContainer.addEventListener('click', e => {
  let clicked = Number(e.target.closest('.projects__box').dataset.box);
  let direction = e.target.closest('.projects__icon--move').dataset.move;
  if (!direction) return;
  if (!clicked) return;
  console.log(clicked);
  console.log(direction);
  // const project = projects.filter(project => project.id === clicked);
  let index = projects.findIndex(project => project.id === clicked);
  // console.log('project', project);
  console.log('index', index);

  const box = document.querySelector(`.projects__box--${clicked}`);
  const images = box.querySelectorAll('.projects__img');
  const btnLeft = box.querySelector(`.left--${clicked}`);
  const btnRight = box.querySelector(`.right--${clicked}`);
  // let curSlide = project;
  // const maxSlide = projects[0].images;
  // console.log('curSlide', curSlide);

  // if (direction === 'next')
  //   projects[index].curSlide = projects[index].curSlide + 1;
  // else projects[index].curSlide - 1;
  console.log('curSlide updated', projects[index].curSlide);
  const goToSlide = function (slide) {
    images.forEach(
      (s, i) => (s.style.transform = `translateY(${-100 * (i - slide)}%)`)
    );
  };

  //Next slide
  const nextSlide = function () {
    console.log(projects[index].curSlide);
    console.log(projects[index].images);
    if (projects[index].curSlide === projects[index].images - 1) {
      projects[index].curSlide = 0;
    } else projects[clicked].curSlide = projects[clicked].curSlide + 1;
    // console.log('curSlide', curSlide);
    goToSlide(projects[index].curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else curSlide--;
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(projects[index].curSlide);
  };

  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  //   console.log('curSlide', curSlide);
  //   console.log('maxSlide', maxSlide);
  //   console.log('images', images);

  //   btnRight.addEventListener('click', () => {
  //     prevSlide(curSlide, maxSlide, images);
  //     console.log('clicked right');
  //   });
  //   btnLeft.addEventListener('click', () =>
  //     prevSlide(curSlide, maxSlide, images)
  //   );
  //   document.addEventListener('keydown', function (e) {
  //     if (e.key === 'ArrowLeft') prevSlide(curSlide, maxSlide, images);
  //     if (e.key === 'ArrowRight')
  //       btnRight.addEventListener('click', () =>
  //         prevSlide(curSlide, maxSlide, images)
  //       );
  //   });
  // });

  // const slider = function () {
  //   console.log(boxNumber);

  //   // const dotContainer = document.querySelector('.dots');

  //   //Next slide

  //   const init = function () {
  //     goToSlide(0);
  //   };

  //   init();

  //   dotContainer.addEventListener('click', function (e) {
  //     if (e.target.classList.contains('dots__dot')) {
  //       const { slide } = e.target.dataset;
  //       goToSlide(slide);
  //       activateDot(slide);
  //     }
  //   });
  // };
  // slider();
});
