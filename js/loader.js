const flower = document.getElementById("flowers");
const logoContai = document.getElementById("logoContainer");
const menus = document.getElementById("menu");

window.addEventListener("load", () => {
  flower.classList.add("rotate-animation");

  setTimeout(() => {
    logoContai.classList.add("hidden");
    menus.classList.add("visible");
    document.body.classList.remove("loading");
  }, 2000);
});