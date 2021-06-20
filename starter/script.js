'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const BtnScrollTo = document.querySelector('.btn--scroll-to'); //btn to click
const section1 = document.querySelector('#section--1'); // where the scroll to
///////////////////////////////////////
// Modal window

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
/////////////////////////////////////////////////////////////////////////
// Implementing Smooth Scrolling
BtnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); // coordinating
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('current scroll(X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport', // only dimensions of tge view port
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling

  // window.scrollTo(                           // 'window.scrollTo'  --> global function in the window
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,   //current position + current scroll
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////////////////////////////////
// Page navigation (without using evnet delegation)

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Page navigation (with using event delegation)

// 1. Add event listener to common parent element
// 2. Determine what element originated the event (event.target)---> to see where the event first happened

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    //console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

/*

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
//logo.className = 'jonas';

*/

/*
// Implementing Smooth Scrolling

const BtnScrollTo = document.querySelector('.btn--scroll-to'); //btn to click
const section1 = document.querySelector('#section--1'); // where the scroll to

BtnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); // coordinating
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('current scroll(X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport', // only dimensions of tge view port
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling

  // window.scrollTo(                           // 'window.scrollTo'  --> global function in the window
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,   //current position + current scroll
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

*/

/*

// Types of Events and Event Handlers
const h1 = document.querySelector('h1');

const alerth1 = function (e) {
  alert('addEventListener : Great! You are reading the heading!');

  // h1.removeEventListener('mouseenter', alerth1);  // it does not have to be inside the function
};

h1.addEventListener('mouseenter', alerth1);

setTimeout(() => h1.removeEventListener('mouseenter', alerth1), 3000);

// h1.onmouseenter = function (e) {
//   // old way because if i want to write multiple events on the same element, this way will just overwrite the function unlike eventListener
//   alert('onmouseenter: Great! You are reading the heading!');
// };

*/

/*
// Event Propagation in Practice

//rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget); //  'e.target' ---> where the click first happened? NOT the element which event handler was attached
  console.log(e.currentTarget === this); // both pointing the same where the event listener was attached to

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

// what if I want events happened in the capturing phase? (rarely used)

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   true
// );

// If I want to catch an event in the 'capturing phase' which normally does not catch any event,
//I can set the thrid parameter ture or false to make it happend in 'capturing phase'
// if i set 'true' event handler will no longer listen to bubbling events but capturing events

*/

// DOM Traversing

const h1 = document.querySelector('h1');

// Going downwardws : child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children); // only to see direct children of 'h1' element
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement); // to see the direct parent of 'h1' element

h1.closest('.header').style.background = 'var(--gradient-secondary)'; // selecting closest parent element that has this class('header')

h1.closest('h1').style.background = 'var(--gradient-primary)';
// if I'm looking for closest('h1') in h1 element, then it's going to be the element itself
// 'closest' is like the opposite of 'querySelector' because 'querySelector' finds its child element no matter how far in the DOM tree
// and 'closest' finds its parent elements na matter how far in the DOM tree

// Going Sideways : siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
// I can only access privious and next sibling in JS

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
