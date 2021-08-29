const setsOfImages = [
  [
    './public/img/schody1.png',
    './public/img/schody2.png',
    './public/img/schody3.png',
    './public/img/schody4.png',
  ],
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
];
const setsOfProjects = [
  {
    title: 'Miodek v3',
    description:
      'My biggest website - containing 14 pages. Write for a real company with honey for sale. Including lazy loading images and slider components. Fully responsive with an easy to manage SCSS structure.',
    liveLink: 'https://gregsypek.github.io/honey',
    gitLink: 'https://github.com/gregsypek/honey',
    readmeLink: 'https://github.com/gregsypek/honey/#readme',
    languages: 'Languages: JavaScirpt, SCSS, HTML',
    images: [
      './public/img/miodekv3-1.png',
      './public/img/miodekv3-2.png',
      './public/img/miodekv3-3.png',
      './public/img/miodekv3-4.png',
    ],
  },
  {
    title: 'WordsApp',
    description:
      'Application built as a helper for learning new words with two print option on preformatted lists.',
    liveLink: 'https://wordsapp.netlify.app',
    gitLink: 'https://github.com/gregsypek/wordsApp2',
    readmeLink: 'https://github.com/gregsypek/wordsApp2/#readme',
    languages: 'Languages: JavaScirpt, SCSS, HTML',
    images: ['./public/img/toDoApp1.png', './public/img/todoApp2.png'],
  },
  {
    title: 'Miodek v2',
    description:
      'Fully accessible and responsive One Page website build with advanced CSS layout, which I implement thanks to Jen Kramer course on Frontend Masters',
    liveLink: 'https://gregsypek.github.io/clover',
    gitLink: 'https://github.com/gregsypek/clover',
    readmeLink: 'https://github.com/gregsypek/clover/#readme',
    languages: 'Languages: JavaScirpt, SCSS, HTML',
    images: [
      './public/img/miodekv2-1.png',
      './public/img/miodekv2-2.png',
      './public/img/miodekv2-3.png',
      './public/img/miodekv2-4.png',
    ],
  },
  {
    title: 'Schody Zalinski',
    description:
      "A project which I've made for a client. Simple, fully responsive website with a fast time loading page. It has no frameworks and it's fully designed by me, including logo",
    liveLink: 'https://schodyzalinski.pl',
    gitLink: 'https://github.com/gregsypek/carpentry2',
    readmeLink: 'https://github.com/gregsypek/carpentry2/#readme',
    languages: 'Languages: JavaScirpt, SCSS, HTML',
    images: [
      './public/img/schody1.png',
      './public/img/schody2.png',
      './public/img/schody3.png',
      './public/img/schody4.png',
    ],
  },
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
  console.log(project.querySelector('.projects__nav--title').textContent);
  const slider = new Slider(
    setsOfImages[i],
    project,
    leftBtns[i],
    rightBtns[i]
  );
  slider.initializeSlider();
});
