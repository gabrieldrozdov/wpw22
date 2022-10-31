/* Clock */
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setTime();
setInterval(setTime, 1000);

/* "Up" button rotation */
let upBtn = document.querySelector("#up");
function scrollRotate() {
  upBtn.style.transform = "rotate(" + window.pageYOffset/10 + "deg)";
}

/* Syllabus navigation section activation */
var myElement = document.getElementById('my-element');

function elementInViewport(e) {
  var bounding = e.getBoundingClientRect();
  var myElementHeight = e.offsetHeight;
  var myElementWidth = e.offsetWidth;
    if (bounding.top >= -myElementHeight 
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
        return true;
    } else {
        return false;
    }
}

window.onscroll = function() {
  let sections = document.querySelectorAll("#desktop-nav li a");
  for (i = 0; i < sections.length; i++) {
    let section = document.querySelector(`.syllabus-section[data-section='${i+1}']`);
    if (elementInViewport(section) == true) {
      sections[i].classList.add("nav-active");
    } else {
      sections[i].classList.remove("nav-active");
    }
  };

  scrollRotate();
  let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if (scrollTop > 400) {
    upBtn.classList.add("up-show");
  } else {
    upBtn.classList.remove("up-show");
  }
};

/* Syllabus mobile menu */
let menu = document.querySelector("#syllabus-menu-links");

function toggleMenu() {
  menu.classList.toggle("menu-hide");
}

/* Heading variable type animation */
let anim = document.querySelector("#heading-animation");
let animTxt = anim.textContent;
let animUpdated = "";
for (i = 0; i < animTxt.length; i++) {
  animUpdated += "<span style='animation-delay:"+(.1*i)+"s'>"+animTxt[i]+"</span>";
}
anim.innerHTML = animUpdated;