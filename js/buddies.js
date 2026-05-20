const students = [

{
  name:"Arjun",
  type:"Push",
  time:"6 PM",
  score:92,
  image:"https://randomuser.me/api/portraits/men/32.jpg"
},

{
  name:"Rohit",
  type:"Pull",
  time:"7 PM",
  score:88,
  image:"https://randomuser.me/api/portraits/men/45.jpg"
},

{
  name:"Kabir",
  type:"Leg",
  time:"5 PM",
  score:81,
  image:"https://randomuser.me/api/portraits/men/12.jpg"
}

];

const buddyGrid = document.getElementById("buddyGrid");

students.forEach(student => {

  buddyGrid.innerHTML += `

    <div class="glass-card buddy-card">

      <img src="${student.image}">

      <h2>${student.name}</h2>

      <p>Workout Type: ${student.type}</p>

      <p>Preferred Timing: ${student.time}</p>

      <p>Match Score: ${student.score}%</p>

      <button class="btn">
        Workout Together
      </button>

    </div>

  `;

});

document.addEventListener("click", e => {

  if(e.target.innerText === "Workout Together"){
    alert("Workout Request Sent!");
  }

});