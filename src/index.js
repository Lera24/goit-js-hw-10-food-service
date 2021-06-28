import deals from './menu.json';
import templates from './sass/templates/events.hbs'
import './sass/main.scss';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const listMeny = document.querySelector('ul.js-menu');
listMeny.innerHTML = templates({ event: deals });

const pageBody = document.querySelector('body');
pageBody.classList.add(Theme.LIGHT);

const changeBackground = function () {
  pageBody.classList.toggle(Theme.DARK);
  pageBody.classList.toggle(Theme.LIGHT);

  localStorage.setItem('background', pageBody.className);
  setCheck();
};

const inputChangeFonds = document.querySelector('.theme-switch__toggle');

inputChangeFonds.addEventListener('change', changeBackground);

const saveBackground = localStorage.getItem('background');

const currentBackground = function () {
  if (saveBackground) {
    pageBody.className = saveBackground;
  }
}
currentBackground();

const setCheck = function () {
  if (pageBody.classList.contains(Theme.DARK)) {
    localStorage.setItem ('name-attribute', 'cheched');

    const newAttribute = localStorage.getItem ('name-attribute');
    inputChangeFonds.setAttribute(newAttribute,'true');

  } else inputChangeFonds.removeAttribute('cheched');
  localStorage.removeItem('name-attribute');
};


