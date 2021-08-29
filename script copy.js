const projectsBoxes = document.querySelector('.projects__boxes');

const boxes = document.querySelector('.projects__boxes');

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
    images: [
      './public/img/wordsApp1.png',
      './public/img/wordsApp2.png',
      './public/img/wordsApp3.png',
      './public/img/wordsApp4.png',
    ],
  },
  {
    title: 'todoApp',
    description:
      "Simple app to manage everyday tasks. As you complete to-do, it's automatically added on the second page called history. Application sorts tasks based on the date.",
    liveLink: 'https://gregsypek.github.io/todoapp',
    gitLink: 'https://github.com/gregsypek/todoapp',
    readmeLink: 'https://github.com/gregsypek/todoapp/#readme',
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
    title: 'Schody Zaliński',
    description:
      "A project which I've for a client. Simple, fully responsive website with a fast time loading page. It has no external scripts and it's fully designed by me, including logo",
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
const createBox = function (array) {
  for (let i = 0; i < array.length; i++) {
    const box = document.createElement('div');
    box.classList.add('projects__box');
    box.classList.add(`rojects__box--${i}`);
    box.setAttribute('data-box', `${i}`);
    projectsBoxes.appendChild(box);
  }
};

createBox(setsOfProjects);

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
    // console.log(this.box);
    this.box.appendChild(this.image);

    // this.addListeners();
  }
  initializeNav(project, index) {
    this.nav = document.createElement('div');
    this.nav.classList.add('projects__nav');
    this.box.appendChild(this.nav);
    this.title = document.createElement('span');
    this.title.classList.add('projects__nav--title');
    this.nav.appendChild(this.title);
    this.title.innerHTML = project.title;
    this.title.insertAdjacentHTML(
      'afterend',
      `<div class="projects__icons">
        <button
          class="projects__icon projects__icon--move left--${index}"
          data-move-prev
        >
          <img src="./public/img/11.svg" alt="arrow left" class="icon" />
        </button>

        <button
          class="projects__icon projects__icon--move right--${index}"
          data-move-next
        >
          <img src="./public/img/12.svg" alt="arrow right" class="icon" />
        </button>

        <a
          href="${project.liveLink}"
          target="_blank"
          class="projects__icon projects__icon--view"
          ><img src="./public/img/13.svg" alt="arrow view" class="icon"
        /></a>
        <a
          href="${project.gitLink}"
          target="_blank"
          class="projects__icon projects__icon--github"
          ><img src="./public/img/14.svg" alt="arrow view" class="icon" />
        </a>
      </div>`
    );
    this.info = document.createElement('div');
    this.info.classList.add('projects__info');
    this.box.append(this.info);
    this.about = document.createElement('p');
    this.about.classList.add('projects__info--about');
    this.about.innerHTML = project.description;
    this.info.append(this.about);
    this.lang = document.createElement('p');
    this.lang.classList.add('projects__info--languages');
    this.lang.innerHTML = project.languages;
    this.info.append(this.lang);
    this.info.insertAdjacentHTML(
      'afterend',
      `<a
        href="${project.readmeLink}"
        target="_blank"
        class="projects__btn btn"
        >More</a
      >`
    );
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
    if (this.prevBtn)
      this.prevBtn.addEventListener('click', () => {
        this.prevSlide(this.currentSlide);
        this.changeSlide(this.currentSlide);
      });
    if (this.nextBtn)
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

const projects = [...document.querySelectorAll('[data-box]')];

projects.map((project, i) => {
  // console.log(project);
  const data = setsOfProjects[i];
  const images = data.images;
  const slider = new Slider(
    images,
    project,

    project.querySelector('[data-move-prev]'),
    project.querySelector('[data-move-next]')
  );

  slider.initializeNav(data, i);
  slider.initializeSlider(project);
  // debugger;
});

// const leftBtns = [...document.querySelectorAll('[data-move-prev]')];
// const rightBtns = [...document.querySelectorAll('[data-move-next]')];
