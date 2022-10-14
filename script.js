/* Clock */
$(document).ready(function() {
  setInterval(setTime, 1000);
  setTime();
});
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

/* Up button rotation */
function scrollRotate() {
    let image = document.getElementById("up");
    image.style.transform = "rotate(" + window.pageYOffset/10 + "deg)";
}
window.onscroll = function () {
  scrollRotate();
};
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 400) {
    $('#up').addClass("up-show");
  } else {
    $('#up').removeClass("up-show");
  }
});

/* Syllabus navigation section activation */
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop() - 500;
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};
$(window).on('resize scroll', function() {
  if ($(".syllabus-section[data-section='1']").isInViewport()) {
    $("#nav1").addClass("nav-active");
    $("#nav2, #nav3, #nav4, #nav5, #nav6, #nav7").removeClass("nav-active");
  };
  if ($(".syllabus-section[data-section='2']").isInViewport()) {
    $("#nav2").addClass("nav-active");
    $("#nav1, #nav3, #nav4, #nav5, #nav6, #nav7").removeClass("nav-active");
  };
  if ($(".syllabus-section[data-section='3']").isInViewport()) {
    $("#nav3").addClass("nav-active");
    $("#nav1, #nav2, #nav4, #nav5, #nav6, #nav7").removeClass("nav-active");
  };
  if ($(".syllabus-section[data-section='4']").isInViewport()) {
    $("#nav4").addClass("nav-active");
    $("#nav1, #nav2, #nav3, #nav5, #nav6, #nav7").removeClass("nav-active");
  };
  if ($(".syllabus-section[data-section='5']").isInViewport()) {
    $("#nav5").addClass("nav-active");
    $("#nav1, #nav2, #nav3, #nav4, #nav6, #nav7").removeClass("nav-active");
  };
  if ($(".syllabus-section[data-section='6']").isInViewport()) {
    $("#nav6").addClass("nav-active");
    $("#nav1, #nav2, #nav3, #nav4, #nav5, #nav7").removeClass("nav-active");
  };
  if ($(".syllabus-section[data-section='7']").isInViewport()) {
    $("#nav7").addClass("nav-active");
    $("#nav1, #nav2, #nav3, #nav4, #nav5, #nav6").removeClass("nav-active");
  };
});

/* Syllabus mobile menu */
var menuOpen = false;
$("body").click(function(){
  if (menuOpen == true) {
    menuOpen = false;
    $("#syllabus-menu-links").css("display", "none");
  }
});
$("#syllabus-menu-btn").click(function(){
  if (menuOpen == false) {
    $("#syllabus-menu-links").css("display", "block");
    setTimeout(function() {menuOpen = true;}, 50);
  }
});
