"use strict"

// Блок слайдера свайпера
const swiper = new Swiper(".slider-main-block", {
  // Optional parameters
  // direction: "vertical",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".body-main-block__arrow.swiper-button-next",
    prevEl: ".body-main-block__arrow.swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
})

// Блок табов

// собираем все объекты навигации (.tabs-feature__button) в константу
const tabNavItems = document.querySelectorAll(`.tabs-feature__button`)
// собираем все объекты табов (.item-tabs) в константу
const tabItems = document.querySelectorAll(`.item-tabs`)
// слушаем все клики на странице
document.addEventListener("click", function (e) {
  const targetElement = e.target
  let currentActiveIndex = null
  let newActiveIndex = null
  //отсеиваем те, которые близки к .tabs-feature__button
  if (targetElement.closest(`.tabs-feature__button`)) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains("active")) {
        currentActiveIndex = index
        tabNavItem.classList.remove(`active`)
      }
      if (tabNavItem === targetElement) {
        newActiveIndex = index
      }
    })
    targetElement.classList.add(`active`)
    tabItems[currentActiveIndex].classList.remove(`active`)
    tabItems[newActiveIndex].classList.add(`active`)
  }
})
