async function loadQuote() {

  try {

    const response = await fetch("https://api.quotable.io/random");

    const data = await response.json();

    document.getElementById("quote").innerText =
      `"${data.content}"`;

  } catch (error) {

    document.getElementById("quote").innerText =
      "Push yourself because no one else will do it for you.";

  }

}

loadQuote();

const days = ["Push Day","Pull Day","Leg Day"];

const today = new Date().getDay();

document.getElementById("todayWorkout").innerHTML = `
  <h1>${days[today % 3]}</h1>
  <p>Train like a beast today.</p>
`;