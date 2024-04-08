const imageCard = document.querySelector(".product-image");

const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const newPrice = document.querySelector(".new-price");
const grayColor = document.getElementsByClassName("gray");



const feedbackBtn = document.querySelector(".feedback");
const cartButton = document.getElementById("buttonc");
const itemTag = document.getElementsByTagName("h3")[0];

redColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "white";
  cartButton.style.color = "black";
  itemTag.style.backgroundColor = "white";
  itemTag.style.color = "black";
  imageCard.style.backgroundImage = 'url("whitec.jpg")';
  newPrice.textContent = "$13000" ;
});

grayColor[0].addEventListener("click", function () {
  cartButton.style.backgroundColor = "gray";
  itemTag.style.backgroundColor = "gray";
  imageCard.style.backgroundImage = 'url("baigec.jpg")';
  newPrice.textContent = "$13000" ;
});

blackColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "black";
  itemTag.style.backgroundColor = "black";
  imageCard.style.backgroundImage = 'url("blackc.jpg")';
  newPrice.textContent = "$13500" ;
});
const imageCardvw = document.querySelector(".product-image-vw");

const blackColorVw = document.querySelector(".blackvw");
const greyColorVw = document.querySelector(".grayvw");
const blueColorVw = document.querySelector(".bluevw")

const itemTagvw = document.getElementsByTagName("h3")[1];

const cartButtonvw = document.getElementById("buttonvw");

blackColorVw.addEventListener("click", function () {
  cartButtonvw.style.backgroundColor = "black";
  itemTagvw.style.backgroundColor = "black";
  imageCardvw.style.backgroundImage = 'url("blackvw.jpg")';
  newPrice.textContent = "$13500" ;
});
blueColorVw.addEventListener("click", function () {
  cartButtonvw.style.backgroundColor = "blue";
  itemTagvw.style.backgroundColor = "blue";
  imageCardvw.style.backgroundImage = 'url("bluevw.jpg")';
  newPrice.textContent = "$13500" ;
});
greyColorVw.addEventListener("click", function () {
  cartButtonvw.style.backgroundColor = "grey";
  itemTagvw.style.backgroundColor = "grey";
  imageCardvw.style.backgroundImage = 'url("greyvw.jpg")';
  newPrice.textContent = "$13500" ;
});

const imageCardV = document.querySelector(".product-image-v");

const blackColorV = document.querySelector(".blackv");
const greyColorV = document.querySelector(".grayv");
const whiteColorV = document.querySelector(".whitev");

const itemTagV = document.getElementsByTagName("h3")[2];

const cartButtonV = document.getElementById("buttonv");

blackColorV.addEventListener("click", function () {
  cartButtonV.style.backgroundColor = "black";
  itemTagV.style.backgroundColor = "black";
  imageCardV.style.backgroundImage = 'url("blackv.jpg")';
  newPrice.textContent = "$13500" ;
});
whiteColorV.addEventListener("click", function () {
  cartButtonV.style.backgroundColor = "white";
  itemTagV.style.backgroundColor = "white";
  imageCardV.style.backgroundImage = 'url("whitev.jpg")';
  newPrice.textContent = "$13500" ;
});
greyColorV.addEventListener("click", function () {
  cartButtonV.style.backgroundColor = "grey";
  itemTagV.style.backgroundColor = "grey";
  imageCardV.style.backgroundImage = 'url("greyv.jpg")';
  newPrice.textContent = "$13500" ;
});



const cart = () => {
  cartButton.style.display = "none";
  feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);

const feedback = () => {
  cartButton.style.display = "block";
  feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);
