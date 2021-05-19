// Hamburger Menu Mobile Version
const hamburger = document.getElementById("hamburger-menu");
const navBar = document.getElementById("nav-bar");

hamburger.addEventListener("click", () => {
  let hamburgerBtn = navBar.classList.toggle("show");
  document.getElementById("overlay").classList.toggle("overlay");

  if (hamburgerBtn) {
    hamburger.firstElementChild.classList.add("fa-times");
    hamburger.firstElementChild.classList.remove("fa-bars");


  }else {
    hamburger.firstElementChild.classList.remove("fa-times");
    hamburger.firstElementChild.classList.add("fa-bars");
  }
});

// Slider for the testimonials

var leftarrow = document.getElementById("leftarrow");
var rightarrow = document.getElementById("rightarrow");
var box = document.getElementById("bx");

var translateValue = box.style.transform;
var translateSum;

let i = 0;
leftarrow.onclick = function()
{
    if (i<1){
        translateSum = translateValue + "translateX(-50%)";
        box.style.transform = translateSum;
        translateValue = translateSum;
        i++;
    }
};

rightarrow.onclick = function()
{
    if (i>0){
        translateSum = translateValue + "translateX(50%)";
        box.style.transform = translateSum;
        translateValue = translateSum;
        i--;
    }
};

// mobile slider
var leftarr = document.getElementById("leftarrowMob");
var rightarr = document.getElementById("rightarrowMob");
var box = document.getElementById("bx");

var translateValue = box.style.transform;
var translateSum;

let a = 0;
leftarr.onclick = function()
{
    if (a<3){
        translateSum = translateValue + "translateX(-25%)";
        box.style.transform = translateSum;
        translateValue = translateSum;
        a++;
    }
};

rightarr.onclick = function()
{
    if (a>0){
        translateSum = translateValue + "translateX(25%)";
        box.style.transform = translateSum;
        translateValue = translateSum;
        a--;
    }
};

// Form Validation before submitting form

function validateForm() {
    let input = document.getElementById("inbox").value;
    let alert = document.getElementById("alert");
    let form = document.getElementById("formbox");

    let pattern = /[a-z]@/;

    if(input.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        return true
    }

    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        alert.innerHTML = "Please insert a valid email";
        return false
    }
}
