
//  /*Burger*/


//  const burgerItem = document.querySelector('.burger');
//  const menu = document.querySelector('.header-nav');
//  const section = document.querySelector('.shadow_wrap');
//  const shelterLogo = document.querySelector('.header-logo');
//  const burgerLogo = document.querySelector('.header-logo_burger');
 
  
 
//  function toggleMenu() {
//    burgerItem.classList.toggle('hamburger__menu_open');
//    }
//    burgerItem.addEventListener('click', toggleMenu);
 
 
//  (function () {
 
//  burgerItem.addEventListener('click', () => {
//    document.body.classList.toggle('_lock');
//    menu.classList.toggle('header-nav_open');
//    section.classList.toggle('shadow_wrap_open');
//    shelterLogo.classList.toggle('header-logo_open');
//    burgerLogo.classList.toggle('header-logo_burger_open');
//  });
//  }());
 
//  menu.addEventListener("click", (event) => {
//    if(event.target){
//      menu.classList.remove("header-nav_open");
//      burgerItem.classList.remove("hamburger__menu_open");
//      document.body.classList.remove('_lock');
//      section.classList.remove('section_open');
//      shelterLogo.classList.remove('header-logo_open');
//    burgerLogo.classList.remove('header-logo_burger_open');
//   }
//  });









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