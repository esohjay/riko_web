const openNavBtn = document.getElementById("openNavBtn");
const closeNavBtn = document.getElementById("closeNavBtn");
const navContainer = document.getElementById("navContainer");
const date = document.querySelector("#date");
const payment = document.querySelector("#payment");
const market = document.querySelector("#market");
const setup = document.querySelector("#setup");
const order = document.querySelector("#order");
const inventory = document.querySelector("#inventory");
const slides = document.querySelectorAll("#slide");
const slide2 = document.querySelectorAll("#slide2");
let current = 0;

openNavBtn.addEventListener("click", function () {
  navContainer.classList.add("showNav");
});
closeNavBtn.addEventListener("click", function () {
  navContainer.classList.remove("showNav");
});
const addHoverEffects = (content, index, imgArr, active, activeContent) => {
  content.addEventListener("mouseover", function () {
    current = index;
    for (let i = 0; i < imgArr.length; i++) {
      if (current === i) {
        imgArr[i].classList.add(active);
        content.classList.add(activeContent);
      } else {
        imgArr[i].classList.remove(active);
        content.classList.remove(activeContent);
      }
    }
  });
};
// setup.classList.add("active-content");
addHoverEffects(payment, 0, slides, "active", "active-content");
addHoverEffects(market, 1, slides, "active", "active-content");
addHoverEffects(setup, 0, slide2, "active", "active-content");
addHoverEffects(inventory, 1, slide2, "active", "active-content");
addHoverEffects(order, 2, slide2, "active", "active-content");
// payment.addEventListener("mouseover", function () {
//   current = 0;
//   for (let i = 0; i < slides.length; i++) {
//     if (current === i) {
//       slides[i].classList.add("active");
//       payment.classList.add("active-content");
//     } else {
//       slides[i].classList.remove("active");
//       payment.classList.remove("active-content");
//     }
//   }
// });

// market.addEventListener("mouseover", function () {
//   current = 1;
//   for (let i = 0; i < slides.length; i++) {
//     if (current === i) {
//       slides[i].classList.add("active");
//       market.classList.add("active-content");
//     } else {
//       slides[i].classList.remove("active");
//       market.classList.remove("active-content");
//     }
//   }
// });
// set year
date.innerHTML = new Date().getFullYear();
