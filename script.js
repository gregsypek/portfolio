const setsOfImages = [
  [
    './public/img/miodekv3-1.png',
    './public/img/miodekv3-2.png',
    './public/img/miodekv3-3.png',
    './public/img/miodekv3-4.png',
  ],
  [
    './public/img/wordsApp1.png',
    './public/img/wordsApp2.png',
    './public/img/wordsApp3.png',
    './public/img/wordsApp4.png',
  ],
  ['./public/img/toDoApp1.png', './public/img/todoApp2.png'],
  [
    './public/img/miodekv2-1.png',
    './public/img/miodekv2-2.png',
    './public/img/miodekv2-3.png',
    './public/img/miodekv2-4.png',
  ],
  [
    './public/img/stolarz1.png',
    './public/img/stolarz2.png',
    './public/img/stolarz3.png',
    './public/img/stolarz4.png',
  ],
];

const projects = [...document.querySelectorAll('[data-box]')];
const leftBtns = [...document.querySelectorAll('[data-move-prev]')];
const rightBtns = [...document.querySelectorAll('[data-move-next]')];

class Slider {
  constructor(images, box, prevBtn, nextBtn) {
    this.images = images;
    this.slide = null;
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
    this.image = null;
    this.currentSlide = 0;
    this.slideArrayLenght = images.length;
    this.box = box;
  }

  initializeSlider() {
    this.image = document.createElement('img');
    this.image.classList.add('projects__img');

    this.setSlideAttributes(0);

    this.slideArrayLength = this.images && this.images.length;

    this.box.appendChild(this.image);

    this.addListeners();
  }

  prevSlide(index) {
    if (index === 0) {
      this.currentSlide = index;
      index = this.slideArrayLenght - 1;
    } else index--;
    this.currentSlide = index;
  }

  nextSlide(index) {
    if (index === this.slideArrayLenght - 1) {
      index = 0;
      this.currentSlide = index;
    } else {
      index++;
      this.currentSlide = index;
    }
  }
  addListeners() {
    this.prevBtn.addEventListener('click', () => {
      this.prevSlide(this.currentSlide);
      this.changeSlide(this.currentSlide);
    });
    this.nextBtn.addEventListener('click', () => {
      this.nextSlide(this.currentSlide);
      this.changeSlide(this.currentSlide);
    });
  }
  changeSlide(index) {
    // if (index === -1 || index === this.slideArrayLength) return;
    this.currentSlide = index;
    this.setSlideAttributes(index);
  }

  setSlideAttributes(index) {
    this.image.setAttribute(
      'src',
      Array.isArray(this.images) && this.images.length && this.images[index]
    );
    this.image.setAttribute('alt', `Image ${index + 1}`);
  }
}

projects.map((project, i) => {
  const slider = new Slider(
    setsOfImages[i],
    project,
    leftBtns[i],
    rightBtns[i]
  );
  slider.initializeSlider();
});
