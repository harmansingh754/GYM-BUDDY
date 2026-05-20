const bmiForm = document.getElementById("bmiForm");

const bmiResult = document.getElementById("bmiResult");

bmiForm.addEventListener("submit", e => {

  e.preventDefault();

  const height =
    document.getElementById("height").value / 100;

  const weight =
    document.getElementById("weight").value;

  const bmi = (weight / (height * height)).toFixed(1);

  bmiResult.innerText = `Your BMI: ${bmi}`;

});

const streakEl = document.getElementById("streak");

const btn = document.getElementById("increaseStreak");

let streak = localStorage.getItem("streak") || 0;

streakEl.innerText = `${streak} Days`;

btn.addEventListener("click", () => {

  streak++;

  localStorage.setItem("streak", streak);

  streakEl.innerText = `${streak} Days`;

});