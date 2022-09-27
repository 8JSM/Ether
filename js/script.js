/*const title = document.querySelector(".hello h1");

function handleTitleClick() { 
    title.classList.toggle("active");
}

function handleMouseEnter() {
    title.innerText = "Mouse is here";

}

function handleMouseLeave() {
    title.innerText = "Mouse is gone";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "beige";
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOOOD");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);**/

/*const calculator = {
    plus: function(firstOfNumber, secondOfNumber) {
        return firstOfNumber + secondOfNumber;
    },
    subtraction: function(firstOfNumber, secondOfNumber) {
        return firstOfNumber - secondOfNumber;
    },
    multiple: function(firstOfNumber, secondOfNumber) {
        return firstOfNumber * secondOfNumber;
    },
    divide: function(firstOfNumber, secondOfNumber) {
        return firstOfNumber / secondOfNumber;
    },
    power: function(firstOfNumber, secondOfNumber) {
        return firstOfNumber ** secondOfNumber;
    }
}

const plusResult = calculator.plus(5, 3);
const subtractionResult = calculator.subtraction(plusResult, 5);
const multipleResult = calculator.multiple(subtractionResult, 2);
const divideResult = calculator.divide(multipleResult, plusResult);
const powerResult = calculator.power(plusResult, subtractionResult);**/

const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

/*function loginBtnClick() {
    const userName = loginInput.value;
    if(userName === "") {
        alert("Please write your name");
    }
    else if(userName.length > 15) {
        alert("Your name is too long");
    }
}**/
/*loginButton.addEventListener("click", loginBtnClick);**/

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(userName);
    /*greeting.innerText = "Hello " + userName;**/
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}