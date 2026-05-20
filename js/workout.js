const workouts = [

{
  type:"Push",
  name:"Bench Press",
  sets:4,
  reps:12,
  muscle:"Chest",
  image:"https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=1000&auto=format&fit=crop"
},

{
  type:"Pull",
  name:"Deadlift",
  sets:5,
  reps:5,
  muscle:"Back",
  image:"https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop"
},

{
  type:"Leg",
  name:"Squats",
  sets:4,
  reps:10,
  muscle:"Legs",
  image:"https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=1000&auto=format&fit=crop"
},

{
  type:"Push",
  name:"Shoulder Press",
  sets:4,
  reps:10,
  muscle:"Shoulders",
  image:"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop"
}

];

const grid = document.getElementById("workoutGrid");

function renderWorkouts(filter){

  grid.innerHTML = "";

  let filtered = workouts;

  if(filter !== "all"){
    filtered = workouts.filter(w => w.type === filter);
  }

  filtered.forEach(workout => {

    grid.innerHTML += `
      <div class="glass-card workout-card">

        <img src="${workout.image}">

        <h2>${workout.name}</h2>

        <p><strong>Type:</strong> ${workout.type}</p>

        <p><strong>Sets:</strong> ${workout.sets}</p>

        <p><strong>Reps:</strong> ${workout.reps}</p>

        <p><strong>Target:</strong> ${workout.muscle}</p>

      </div>
    `;

  });

}

renderWorkouts("all");

const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach(btn => {

  btn.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    renderWorkouts(btn.dataset.filter);

  });

});