function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

document.querySelector(".nav__logo--title").innerHTML = "Coco";
