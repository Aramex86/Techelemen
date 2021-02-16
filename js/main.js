"use strict";

const mobileBtn = document.querySelector(".btn-mobile");
const openMenu = document.querySelector(".openmenu");
const closeMenu = document.querySelector(".btn-closemobilemenu");
const elem = document.querySelector(".mobile__level2__list");

//mobile main menu
mobileBtn.addEventListener("click", () => {
    document.querySelector(".mobile").style.left = 0;
});

closeMenu.addEventListener("click", () => {
    document.querySelector(".mobile").style.left = -80 + "%";
});

//mobile inside menu
openMenu.addEventListener("click", () => {
  elem.classList.toggle("mobile__level2__list--show");
});