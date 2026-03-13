
// PAGE LOADER
window.addEventListener("load", () => {
document.getElementById("loader").style.display="none";
});


// HERO SLIDER

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(){

slides.forEach(slide => slide.classList.remove("active"));

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

}

setInterval(showSlide,5000);



// ACTIVE NAV LINKS

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", ()=>{

let current="";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 100;

if(pageYOffset >= sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(a=>{
a.classList.remove("active");
if(a.getAttribute("href") === "#"+current){
a.classList.add("active");
}
});

});


// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText="0";

const updateCounter = ()=>{

const target = +counter.getAttribute("data-target");
const c = +counter.innerText;

const increment = target/200;

if(c < target){

counter.innerText = `${Math.ceil(c+increment)}`;
setTimeout(updateCounter,10);

}else{

counter.innerText = target;

}

};

updateCounter();

});


// DARK MODE TOGGLE

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", ()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggle.textContent="☀️";
}else{
toggle.textContent="🌙";
}

});



// NEWSLETTER

document.getElementById("newsletterForm").addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you for subscribing!");

this.reset();

});