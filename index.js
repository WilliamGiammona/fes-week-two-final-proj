function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

const fn = (num) => {
  min = Math.floor(num / 60);
  seconds = num % 60;
};

console.log(fn(7));
