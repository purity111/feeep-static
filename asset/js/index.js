let lastScrollY = window.scrollY;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const distanceToBottom =
    document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
  const qr = document.getElementById("qr");

  if (distanceToBottom < 800) {
    qr.style.opacity = "0";
    qr.style.transition = "opacity 0.5s ease-out";
  } else if (distanceToBottom >= 800) {
    qr.style.opacity = "1";
  } else if (currentScrollY > 200) {
    header.style.opacity = "0";
    qr.style.opacity = "1";
  } else if (currentScrollY <= 200) {
    header.style.opacity = "1";
    header.style.opacity = "1";
  }
  lastScrollY = currentScrollY;
});

const qrDiv = document.getElementById("qr");
const qrFoot = document.getElementById("qr-foot");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");

qrFoot.addEventListener("click", function () {
  modal.classList.remove("hidd"); 
});

qrDiv.addEventListener("click", function () {
  modal.classList.remove("hidd"); 
});

closeBtn.addEventListener("click", function () {
  modal.classList.add("hidd"); 
  qrDiv.classList.remove('active');
});

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.add("hidd"); 
    qrDiv.classList.remove('active');
  }
});
