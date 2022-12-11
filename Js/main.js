//load
let loading = document.querySelector(".loading");
window.addEventListener('load', () => {
    loading.style.display = 'none';
});

//form
let closeBtn = document.querySelectorAll(".form__close");
let formContainer = document.querySelector(".form-container");
for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener("click", function () {
      formLogin.classList.remove("show");
      formRegister.classList.remove("show");
      formForgetpass.classList.remove("show");
      formContainer.classList.remove("show");
    });
  }

formContainer.addEventListener('click',()=> {
    formContainer.classList.remove("show");
    formLogin.classList.remove("show");
    formRegister.classList.remove("show");
    formForgetpass.classList.remove("show");
    sideBar.classList.remove("show");
    menuBtn.classList.remove("active");
})

//function-form
let loginBtn = document.querySelector(".header__content--login");
let formLogin = document.querySelector(".form-login");

let formRegister = document.querySelector(".form-register");
let linkRegister = document.querySelector("#register");
linkRegister.addEventListener("click", function () {
    formLogin.classList.remove("show");
    formRegister.classList.add("show");
  });

let formForgetpass = document.querySelector(".form-forgetpass");
let checkForgot = document.querySelector(".check__forgot");
checkForgot.addEventListener("click", function () {
    formLogin.classList.remove("show");
    formRegister.classList.remove("show");
    formForgetpass.classList.add("show");
    
  });


//loginbtn
loginBtn.addEventListener("click", function () {
    formLogin.classList.toggle("show");
    formContainer.classList.toggle("show");
  });

let menuBtn = document.querySelector("#menu-btn");
let menuSpan = document.querySelector("#menu-btn span");
let sideBar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  sideBar.classList.toggle("show");
  formContainer.classList.toggle("show");
  });