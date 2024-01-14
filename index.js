// # Strict Mode
"use strict";

const addEventOneElement = function (element , type , listener) {
    if (element.length > 1) {
        for (let i = 0; i < element.length; i++) {
            element[i].addEventListener(type , listener);
        }
    } else {
        element.addEventListener(type , listener);
    }
}


const navbar = document.querySelector("[data-navbar]");
const service = document.querySelector("[data-service-nav]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    service.classList.toggle("active");
    this.classList.toggle("active");
    
}

addEventOneElement(navToggler , "click" , toggleNav);

const closeNav = function () {
    navbar.classList.remove("active");
    service.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOneElement(navbarLinks , "click" , closeNav);

const header = document.querySelector("[data-container]");

const head = document.querySelector(".logo");
const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");
const icon = document.querySelector(".link-icon");


const links = document.querySelectorAll("[data-nav-link]")[0];
const link = document.querySelectorAll("[data-nav-link]")[1];
const linkOne = document.querySelectorAll("[data-nav-link]")[2];
const linkTwo = document.querySelectorAll("[data-nav-link]")[3];
const linkThree = document.querySelectorAll("[data-nav-link]")[4];


window.addEventListener("scroll" , function () {
    if (this.window.scrollY > 50) {
        header.classList.add("active");
        head.classList.add("active");
        menu.classList.add("active");
        close.classList.add("active");
        
        links.classList.add("active");
        link.classList.add("active");
        linkOne.classList.add("active");
        linkTwo.classList.add("active");
        linkThree.classList.add("active");
    } else {
        header.classList.remove("active");
        head.classList.remove("active");
        menu.classList.remove("active");
        close.classList.remove("active");
        links.classList.remove("active");
        link.classList.remove("active");
        linkOne.classList.remove("active");
        linkTwo.classList.remove("active");
        linkThree.classList.remove("active");
    }
});


const tabBtn = document.querySelectorAll("[data-tab-btn]");
let lastClickedTabBtn = tabBtn[0];

const changeTab = function () {
    lastClickedTabBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedTabBtn = this;
}

addEventOneElement(tabBtn , "click" , changeTab);



const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".slider-list");
const firstCardWidth = carousel.querySelector(".cards").offsetWidth;
const arrowBtns = document.querySelectorAll(".icons-slider .icon-one");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(1, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));


const nav = document.querySelector("[data-container]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll" , function () {
    if (this.window.scrollY > 50) {
        nav.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        nav.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});