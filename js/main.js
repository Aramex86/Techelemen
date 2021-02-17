"use strict";

const mobileBtn = document.querySelector(".btn--mobile");
const openMenu = document.querySelector(".openmenu");
const closeMenu = document.querySelector(".btn--closemobilemenu");
const elem = document.querySelector(".mobile__level2__list");
const itemName = document.querySelectorAll(".main__itemwrapp-item-desc-name");
const cards = document.querySelectorAll(".main__itemwrapp-item");

//Modal
const modalWindow = document.querySelectorAll(".changes__modal");
const modalInput = document.querySelectorAll(".modal_input");
const readyBtn = document.querySelectorAll(".btn--ready");
const modalClose = document.querySelectorAll(".btn--closemodal");

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

//Modal logic

const closeModal = () => {
  for (let i = 0; i < modalWindow.length; i++) {
    modalClose[i].addEventListener("click", () => {
      modalWindow[i].style.display = "none";
    });
  }
};

const openChangeNameModal = () => {
  for (let i = 0; i < itemName.length; i++) {
    itemName[i].addEventListener("click", () => {
      itemName[i].nextElementSibling.style.display = "flex";
    });
  }
};

function itemObj(id, name) {
  this.id = id;
  this.name = name;
}
const changeName = () => {
  for (let i = 0; i < modalWindow.length; i++) {
    readyBtn[i].addEventListener("click", () => {
      itemName[
        i
      ].innerHTML = `${modalInput[i].value}`;
      modalWindow[i].style.display = "none";
      const obj = new itemObj(
        Math.trunc(Math.random() * 12),
        itemName[i].innerText
      );
      console.log(obj);
    });
  }
};

// DND
let dragSrcEl = null;

function handleDragStart(e) {
  this.style.opacity = "0.4";
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
  changeName();
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = "move";
  return false;
}

function handleDragEnter(e) {}

function handleDragLeave(e) {}

function handleDrop(e) {
  cards.forEach((card) => {
    card.style.opacity !== "0.4"
      ? (card.style.opacity = "5")
      : (card.style.opacity = "5");
  });
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
  }
  return false;
}

function handleDragEnd(e) {}

cards.forEach((card) => {
  card.addEventListener("dragstart", handleDragStart, false);
  card.addEventListener("dragenter", handleDragEnter, false);
  card.addEventListener("dragover", handleDragOver, false);
  card.addEventListener("dragleave", handleDragLeave, false);
  card.addEventListener("dragend", handleDragEnd, false);
  card.addEventListener("drop", handleDrop, false);
});

changeName();
closeModal();
openChangeNameModal();
