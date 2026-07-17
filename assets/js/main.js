document.querySelectorAll('.show-demo').forEach(button => {
  button.addEventListener('click', () => {
    const dialogId = button.dataset.dialogId;
    const dialog = document.getElementById(dialogId);
    dialog.show(); 
  });
});

document.querySelectorAll('.close-dialog').forEach(button => {
  button.addEventListener('click', () => {
    const dialogId = button.dataset.dialogId;
    const dialog = document.getElementById(dialogId);
    const video = dialog.querySelector('video');
    if (video) video.pause();
    dialog.close();
  });
});

const year = document.getElementById("year");
const currentYear = new Date().getFullYear();

year.setAttribute("datetime", String(currentYear));
year.textContent = currentYear;

const menuButton = document.querySelector(".menu-button");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".main-navigation");

menuButton.addEventListener('click', ()=> {
    menuIcon.classList.toggle("changed");
    nav.classList.toggle("display-menu");
});

const form = document.querySelector(".form-contact");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

form.addEventListener('submit', (e) =>{
  
    if(!name.value.trim()) {
       e.preventDefault();
      const warning = name.parentElement.querySelector(".warning");
      if(!warning) {
        const span = document.createElement("span");
        span.textContent = `Please enter your name.`;
        span.classList.add("warning");
        name.classList.add("warning-input");
        name.parentElement.appendChild(span);
        name.focus();
      }
    } else if(!email.value.trim()) {
       e.preventDefault();
        const warning = email.parentElement.querySelector(".warning");
        if(!warning) {
        const span = document.createElement("span");
        span.textContent = `Please enter your email address.`;
        span.classList.add("warning");
        email.classList.add("warning-input");
        email.parentElement.appendChild(span);
        email.focus();
      }
    } else if(!message.value.trim()){
       e.preventDefault();
      const warning = message.parentElement.querySelector(".warning");
        if(!warning) {
        const span = document.createElement("span");
        span.textContent = `Please enter a message.`;
        span.classList.add("warning");
        message.classList.add("warning-input");
        message.parentElement.appendChild(span);
        message.focus();
      }
    }
});

name.addEventListener("input", () => {
  const warning = name.parentElement.querySelector(".warning");
    if(warning) {
      name.classList.remove("warning-input");
      name.classList.remove("outline-input");
      warning.remove();
    } 
});

email.addEventListener("input", () => {
  const warning = email.parentElement.querySelector(".warning");
    if(warning) {
      email.classList.remove("warning-input");
      email.classList.remove("outline-input");
      warning.remove();
    } 
});

message.addEventListener("input", () => {
  const warning = message.parentElement.querySelector(".warning");
    if(warning) {
      message.classList.remove("warning-input");
      message.classList.remove("outline-input");
      warning.remove();
    } 
});

name.addEventListener("focus", () => {
  const warning = name.parentElement.querySelector(".warning");
    if(warning) {
      name.classList.add("outline-input");
    }
});

email.addEventListener("focus", () => {
  const warning = email.parentElement.querySelector(".warning");
    if(warning) {
      email.classList.add("outline-input");
    }
});

message.addEventListener("focus", () => {
  const warning = message.parentElement.querySelector(".warning");
    if(warning) {
      message.classList.add("outline-input");
    }
});





