// Your WhatsApp number (country code, no + or spaces)
var WA_NUMBER = "923008537376";

// Mobile menu
var burger = document.querySelector(".burger");
var nav = document.getElementById("nav");
burger.addEventListener("click", function () {
  var open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
});

// Gallery lightbox
var lb = document.getElementById("lb");
var lbImg = lb.querySelector("img");
document.getElementById("grid").addEventListener("click", function (e) {
  var img = e.target.closest("button") && e.target.closest("button").querySelector("img");
  if (!img) return;
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  lb.hidden = false;
});
lb.addEventListener("click", function () { lb.hidden = true; });
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") lb.hidden = true;
});

// Quote form opens WhatsApp with a ready message
var form = document.getElementById("quote");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = form.name.value.trim();
  var err = form.querySelector(".err");
  if (!name) {
    err.hidden = false;
    form.name.focus();
    return;
  }
  err.hidden = true;
  var text = "Assalam o Alaikum, my name is " + name + ".\n" +
    "I need: " + form.service.value + ".\n" +
    (form.msg.value.trim() ? "Details: " + form.msg.value.trim() : "");
  window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text), "_blank", "noopener");
});

document.getElementById("yr").textContent = new Date().getFullYear();
