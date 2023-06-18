const burger = document.querySelector(".burger");
const bar = document.querySelector(".bar");
const closebtn = document.querySelector(".close");
const header = document.querySelector(".header");
const btnDarkMode = document.querySelector(".night-mode");
const body = document.querySelector("body");

if (localStorage.getItem("darkMode") === "Dark") {
  btnDarkMode.classList.add("icon-active");
  isDark = body.classList.add("dark");
} else {
  btnDarkMode.classList.remove("icon-active");
  isDark = body.classList.remove("dark");
}

btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("icon-active");
  isDark = body.classList.toggle("dark");
  if (isDark) {
    localStorage.setItem("darkMode", "Dark");
  } else {
    localStorage.setItem("darkMode", "Light");
  }
};

function op() {
  bar.classList.toggle("none");
}
function cs() {
  bar.classList !== "none" ? bar.classList.add("none") : false;
}
header.addEventListener("click", cs);
