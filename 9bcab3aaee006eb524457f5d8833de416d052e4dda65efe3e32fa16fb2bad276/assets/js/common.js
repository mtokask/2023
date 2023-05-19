"use strict";
(function () {
  const winW = window.innerWidth;
  const header = document.getElementById('header');
  const navToggle = document.querySelector('.nav-toggle');
  if(winW <= 768){
    navToggle.addEventListener('click', ()=>{
      if(header.classList.contains('is-open')){
        header.classList.remove('is-open');
        navToggle.textContent = '▦';
      } else {
        header.classList.add('is-open');
        navToggle.textContent = '□';
      }
    });
  }
}());

