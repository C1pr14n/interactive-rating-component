"use script";

const btn = document.querySelector(".card-btn");
const card = document.querySelector(".card-first");
const cardThankyou = document.querySelector(".card-thankyou");
const ratingList = document.querySelector(".rating-list");
const rate = document.querySelector("#rate");

let rating = "";
let prevRate = null;

ratingList.addEventListener("click", function (e) {
  rating = +e.target.textContent;

  if (rating) {
    e.target.classList.add("active");
  }

  if (prevRate !== null) {
    prevRate.classList.remove("active");
  }

  prevRate = e.target;
});

btn.addEventListener("click", function () {
  if (rating && rating === +rating) {
    card.classList.toggle("hidden");
    cardThankyou.classList.toggle("hidden");
    rate.innerHTML = rating;
  } else {
    alert("You have not selected a rating. Please choose a rate!");
  }
});
