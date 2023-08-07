let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let namefield = document.getElementById("namefield");
let tittle = document.getElementById("tittle");

signinbtn.onclick=function(){
namefield.style.maxHeight = "0";
tittle.innerHTML = "Sign In";
signupbtn.classList.add("disable");
signinbtn.classList.remove("disable");
}
signupbtn.onclick=function(){
namefield.style.maxHeight = "65px";
tittle.innerHTML = "Register Now !";
signupbtn.classList.remove("disable");
signinbtn.classList.add("disable");
}