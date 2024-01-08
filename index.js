function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

const adv = (arr) => {
  let sortedArray = arr.sort((a, b) => {
    return a.price - b.price;
  });
  return sortedArray;
};

console.log(
  adv([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 },
  ])
);
