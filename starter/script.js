'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>';

//header.prepend(message);
// 'prepend' adds the element as the first child of this element(header) in this case.
header.append(message);
// 'append' adds the element as the last child of this element(header) in this case.
// the 'header' element cannot be two placese at the same time. so it moved from top to bottom.

//header.append(message.cloneNode(true)); // ----> copying the element so it can be seen in the multiple places

//header.before(message);
//header.after(message);

// Delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //message.remove();   // recently added
    message.parentElement.removeChild(message); // old way of removing element
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); // nothing in the console
console.log(message.style.backgroundColor); //rgb(55, 56, 61)
// styles that I set manually are called 'inline' style. such as 'width' and 'backgroundColor'
// I can only read the 'inline' style in the console
console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
// I can read the style by using 'getComputedStyle'
console.log(getComputedStyle(message).height); // even though I did not define the height I can even read the defalut height

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

const logo = document.querySelector('.nav__logo');
//Standard properties on images
console.log(logo.alt); // Bankist logo
console.log(logo.src); // http://127.0.0.1:5500/starter/img/logo.png
console.log(logo.className); //nav__logo

logo.alt = 'Beautiful minicalist logo';

// Non- Standard properties
console.log(logo.designer); // undefined
// on images there are standard attributes on them such as 'alt', 'src' and 'className'.
// if I specify them in HTML, JS will automatically create these properties on the object but other properties which are not standard

// there is way to read Non- standard properties
console.log(logo.getAttribute('designer')); //Jonas
logo.setAttribute('company', 'Bankist'); // company="Bankist" will be inserted in the DOM

console.log(logo.src); // http://127.0.0.1:5500/starter/img/logo.png   ---> Absolute version
console.log(logo.getAttribute('src')); // img/logo.png    ----> relative version

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // http://127.0.0.1:5500/starter/#
console.log(link.getAttribute('href')); // #

// Data Attributes  (the attributes have to start with 'data')

console.log(logo.dataset.versionNumber); //3.0

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes that I use in the arrays

// Don't use this
logo.className = 'jonas';
