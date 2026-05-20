const form = document.getElementById("slotForm");

const slotList = document.getElementById("slotList");

let slots = JSON.parse(localStorage.getItem("slots")) || [];

function renderSlots(){

  slotList.innerHTML = "";

  slots.forEach(slot => {

    slotList.innerHTML += `
      <li>
        ${slot.day} - ${slot.time}
      </li>
    `;

  });

}

renderSlots();

form.addEventListener("submit", e => {

  e.preventDefault();

  const day = document.getElementById("day").value;

  const time = document.getElementById("time").value;

  if(day === "" || time === ""){
    alert("Fill all fields");
    return;
  }

  slots.push({day,time});

  localStorage.setItem("slots", JSON.stringify(slots));

  renderSlots();

  form.reset();

});