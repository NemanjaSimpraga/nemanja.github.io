// const sections = document.querySelectorAll(".about__heading");

// observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.intersectionRatio > 0) {
//       entry.target.style.animation = `anim 3s forwards ease-out`;
//     } else {
//       entry.target.style.animation = `none`;
//     }
//   });
// });

// sections.forEach((section) => {
//   observer.observe(section);
// });

const mouseCurrsor = document.getElementById("mouse");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCurrsor.style.top = e.pageY + "px";
  mouseCurrsor.style.left = e.pageX + "px";
}

const logo = document.querySelector(".nav__logo");
const nav = document.querySelector(".nav__menu");
const backdrop = document.querySelector(".backdrop");
const linkItem = document.querySelectorAll(".nav__item");

logo.addEventListener("click", () => nav.classList.add("open-nav"));
backdrop.addEventListener("click", () => nav.classList.remove("open-nav"));

for (let i = 0; i <= linkItem.length; i++) {
  linkItem[i].addEventListener("click", () => nav.classList.remove("open-nav"));
}
