const products = [
  {
    id: 0,
    name: `prod1`,
    title: `Product 1`,
    img: `prod1.png`,
    price: 200,
  },
  {
    id: 1,
    name: `prod2`,
    title: `Product 2`,
    img: `prod2.png`,
    price: 200,
  },
  {
    id: 2,
    name: `prod3`,
    title: `Product 3`,
    img: `prod3.png`,
    price: 200,
  },
  {
    id: 3,
    name: `prod4`,
    title: `Product 4`,
    img: `prod4.png`,
    price: 200,
  },
  {
    id: 4,
    name: `prod5`,
    title: `Product 5`,
    img: `prod5.png`,
    price: 200,
  },
  {
    id: 5,
    name: `prod6`,
    title: `Product 6`,
    img: `prod6.png`,
    price: 200,
  },
];

const categories = products.map((x) => x);
const prodList = document.querySelector(".products");
let i = 0;

prodList.innerHTML = categories
  .map((x) => {
    const { img, title, price, id } = x;
    return `<div class="box" id=${id}>
          <div class="img-box"><img src="${img}" /></div>
          <div class="description">
            <p>${title}</p>
            <p class="price">${price} zł</p>
          </div>
          <button class="add")'>Dodaj do koszyka</button></div>`;
  })
  .join("");

const basketItem = document.querySelector(".basket-items");
const addBtn = document.querySelectorAll(".add");
const removeAllBtn = document.querySelector(".remove-all");
const itemsCount = document.querySelector(".count");
const sum = document.querySelector(".sum");
const removeBtn = document.querySelector(".remove");

let cart = [];

addBtn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    id = e.target.parentElement.getAttribute("id");
    cart.push(categories[id]);
    displaycart();
    itemsCount.innerHTML = cart.length;
  });
});

removeAllBtn.addEventListener("click", function (e) {
  return (
    (cart = []),
    ((basketItem.innerHTML = "Twój koszyk jest pusty"),
    (itemsCount.innerHTML = 0),
    (sum.innerHTML = `0.00zł`))
  );
});

displaycart();

function displaycart(a) {
  let j = 0;
  let total = 0;

  if (cart.length == 0) {
    basketItem.innerHTML = "Twój koszyk jest pusty";
    sum.innerHTML = sum.innerHTML = `0.00zł`;
  } else {
    basketItem.innerHTML = cart
      .map((x) => {
        const { img, title, price, id } = x;
        total = total + price;
        sum.innerHTML = `${total}.00zł`;

        return `
            <div class="item" number=${id}>
            <div class="img-box"><img src="${img}" /></div>
            <p>${title}</p>
            <p class="price">${price}</p></div>`;
      })
      .join("");
  }
}

document.addEventListener("click", function (e) {
  const target = e.target.parentElement.closest(".number");

  console.log(target);
});
