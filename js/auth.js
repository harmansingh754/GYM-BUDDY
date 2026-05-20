// SIGNUP

const signupForm =
document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",e=>{

e.preventDefault();

const name =
document.getElementById("signupName").value;

const email =
document.getElementById("signupEmail").value;

const password =
document.getElementById("signupPassword").value;

const user = {
name,
email,
password
};

localStorage.setItem(
"gymUser",
JSON.stringify(user)
);

alert("Signup Successful!");

window.location.href="login.html";

});

}

// LOGIN

const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",e=>{

e.preventDefault();

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

const savedUser =
JSON.parse(localStorage.getItem("gymUser"));

if(
savedUser &&
savedUser.email===email &&
savedUser.password===password
){

alert("Login Successful!");

window.location.href="index.html";

}else{

alert("Invalid Credentials");

}

});

}