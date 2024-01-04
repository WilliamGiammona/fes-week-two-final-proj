function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

const fn = (str) => {
  let char = str[str.length - 1];
  for (i = 2; i <= str.length; i++) {
    char += str[str.length - i];
  }
  return char;
};

console.log(fn("CocoMooja"));
