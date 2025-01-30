let lastScrollY = window.scrollY;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > 200) {
    header.style.opacity = "0";
  } else {
    header.style.opacity = "1";
  }
  lastScrollY = currentScrollY;
});
