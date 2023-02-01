"use script";

const btn = document.querySelector(".card-btn");
const card = document.querySelector(".card");
const cardThankyou = document.querySelector(".rating-card-thankyou");
const ratingList = document.querySelector(".rating-list");
const rate = document.querySelector("#rate");
const ratingBtn = document.querySelectorAll(".rating-btn");
let rating = "";

ratingList.addEventListener("click", function (e) {
  rating = +e.target.textContent;

  if (rating) {
    e.target.classList.toggle("active");
  }
});

btn.addEventListener("click", function (e) {
  if (rating && rating === +rating) {
    card.classList.toggle("hidden");
    cardThankyou.classList.toggle("hidden");
    rate.innerHTML = rating;
  } else {
    alert("You have not selected a rating. Please choose a rate!");
  }
});
