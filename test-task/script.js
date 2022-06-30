
 /*Burger*/


 const burgerItem = document.querySelector('.burger');
 const menu = document.querySelector('.header-nav');


 
 function toggleMenu() {
   burgerItem.classList.toggle('hamburger__menu_open');
   }
   burgerItem.addEventListener('click', toggleMenu);
 
 
 (function () {
 
 burgerItem.addEventListener('click', () => {
   document.body.classList.toggle('_lock');
   menu.classList.toggle('header-nav_open');
 });
 }());
 
 menu.addEventListener("click", (event) => {
   if(event.target){
     menu.classList.remove("header-nav_open");
     burgerItem.classList.remove("hamburger__menu_open");
     document.body.classList.remove('_lock');
     section.classList.remove('section_open');
  }
 });









// MODAL


const modalTrigger = document.querySelector('.call_link')
const modalCloseTrigger = document.querySelector('.popup_close')
const popupModal = document.querySelector('.popup')


    modalTrigger.addEventListener('click', () => {
    popupModal.classList.add('popup_open')
    popupModal.querySelector('.popup_close').addEventListener('click', () => {
       popupModal.classList.remove('popup_open')
    })
   
  })