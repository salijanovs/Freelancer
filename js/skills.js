const burger = document.querySelector(".burger");
const bar = document.querySelector(".bar");
const closebtn = document.querySelector(".close");
const header = document.querySelector(".header");
function op() {
  bar.classList.toggle("none");
}
function cs() {
  bar.classList !== "none" ? bar.classList.add("none") : false;
}
