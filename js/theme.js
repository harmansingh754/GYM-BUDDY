const themeToggle =
document.getElementById("themeToggle");

if(themeToggle){

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

localStorage.setItem("theme","light");

themeToggle.innerText="☀️";

}else{

localStorage.setItem("theme","dark");

themeToggle.innerText="🌙";

}

});

}

if(localStorage.getItem("theme")==="light"){

document.body.classList.add("light-mode");

const btn =
document.getElementById("themeToggle");

if(btn){
btn.innerText="☀️";
}

}