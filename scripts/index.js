window.onload = function () {
  const hamburgerMenu = document.querySelector('#hamburger');
  const menu = document.querySelector('#menu');
  const closeMenu = document.querySelector('#closeMenu');
  const closeNavLink = document.querySelectorAll('li.nav-link a');
  const openAndClose = function () {
    menu.classList.toggle('visible-menu');
  };
  hamburgerMenu.addEventListener('click', openAndClose);
  closeMenu.addEventListener('click', openAndClose);
  closeNavLink.forEach((element) => {
    element.addEventListener('click', openAndClose);
  });
  // ----------------------------------------------Array of projects
  const arrOfProjects = [
    {
      image: '../assets/images/projects/project-1.svg',
      title: 'Project 1',
      languages: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      linkLiveVersion: '#',
      linkToSource: '#',
    },
    {
      image: '../assets/images/projects/project-2.svg',
      title: 'Project 2',
      languages: ['HTML/CSS', 'Ruby on Rails', '+1'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      linkLiveVersion: '#',
      linkToSource: '#',
    },
    {
      image: '../assets/images/projects/project-3.svg',
      title: 'Project 3',
      languages: ['HTML/CSS', 'Ruby on Rails', '+1'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      linkLiveVersion: '#',
      linkToSource: '#',
    },
    {
      image: '../assets/images/projects/project-4.svg',
      title: 'Project 4',
      languages: ['HTML/CSS', 'Ruby on Rails', '+1'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      linkLiveVersion: '#',
      linkToSource: '#',
    },
    {
      image: '../assets/images/projects/project-5.svg',
      title: 'Project 5',
      languages: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      linkLiveVersion: '#',
      linkToSource: '#',
    },
    {
      image: '../assets/images/projects/project-6.svg',
      title: 'Project 6',
      languages: ['HTML/CSS', 'Ruby on Rails', '+1'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      linkLiveVersion: '#',
      linkToSource: '#',
    },
  ];

  const projects = arrOfProjects.map((element, index) => {
    const card = document.createElement('article');
    card.className = `project-card project-card-${index + 1}`;
    card.innerHTML = `<img src="${element.image}" alt="project-${index + 1}">
    <div class="card-body">
      <h2 class="card-header">${element.title}</h2>
      <ul class="languages">
        <li class="lang">${element.languages[0]}</li>
        <li class="lang">${element.languages[1]}</li>
        <li class="lang">${element.languages[2]}</li>
      </ul>
      <button class="project-link" type="button">See this project<i class="fas fa-arrow-right"></i></button>
    </div>`;
    return card;
  });
  const projectsSection = document.getElementById('Portfolio');
  for (let i = 0; i < projects.length; i += 1) {
    projectsSection.appendChild(projects[i]);
    if (i === 1) {
      const div = document.createElement('div');
      div.className = 'project-decoration-1';
      projectsSection.appendChild(div);
    }
    if (i === 4) {
      for (let j = 0; j < 3; j += 1) {
        const div = document.createElement('div');
        div.className = `project-decoration-${j + 2}`;
        projectsSection.appendChild(div);
      }
    }
  }

  const modaBody = document.querySelector('#modal_body');

  const closeModal = () => {
    modaBody.innerHTML = '';
    document.querySelector('#modal').classList.remove('open-modal');
  };

  const openModal = (e) => {
    const currentTitle = e.target.parentNode.children[0].innerHTML;
    const modal = document.getElementById('modal');
    const project = arrOfProjects.filter((pro) => pro.title === currentTitle)[0];
    const modalTop = document.createElement('div');
    modalTop.className = 'top';
    modalTop.innerHTML = `<h1 class="display-2">${project.title}</h1>
      <span id="close_modal" class="close-modal">x</span>`;
    const languages = document.createElement('ul');
    languages.className = 'modal-languages';
    for (let i = 0; i < project.languages; i += 1) {
      const lang = document.createElement('li');
      lang.className = 'modal-language';
      lang.innerHTML = project.languages[i];
      languages.appendChild(lang);
    }
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'image-wrap';
    imageWrapper.innerHTML = `<img src="${project.image}" alt="${project.title}" class="modal-image">`;
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    modalBody.innerHTML = ` <p class="par">${project.description}</p>
  <div class="go-to-wrapper">
    <a href="${project.linkLiveVersion}" class="btn btn-secondary">See live<i class="fas fa-external-link-alt"></i></a>
    <a href="${project.linkToSource}" class="btn btn-secondary">See source<i class="fab fa-github"></i></a>
  </div>
  <div class="slider-wrapper">
    <button class="slide"><i class="fas fa-long-arrow-alt-left"></i>Previous project</button>
    <button class="slide">Next project<i class="fas fa-long-arrow-alt-right"></i></button>
  </div>`;
    modaBody.append(modalTop, languages, imageWrapper, modalBody);
    const closeModalButton = document.querySelector('#close_modal');
    closeModalButton.addEventListener('click', closeModal);
    modal.classList.add('open-modal');
  };

  const projectButtons = document.querySelectorAll('.project-link');
  projectButtons.forEach((button) => {
    button.addEventListener('click', openModal);
  });

  const form = document.getElementById('form');
  const email = document.getElementById('email');

  const closeError = ({ target }) => {
    document.querySelector('body').removeChild(target.parentNode);
  };
  const showError = (message) => {
    const error = document.createElement('div');
    error.className = 'error';
    error.innerHTML = `<span id="close_error" class="close-error">x</span>
      <p class="par">${message}</p>
      <button id="ok_error" class="btn">Ok</button>
      `;
    document.querySelector('body').appendChild(error);
    document.querySelector('#close_error').addEventListener('click', closeError);
    document.querySelector('#ok_error').addEventListener('click', closeError);
  };
  form.addEventListener('submit', (e) => {
    if (email.value !== email.value.toLowerCase()) {
      showError('The email should be lower-case!');
      e.preventDefault();
    }
  });
};