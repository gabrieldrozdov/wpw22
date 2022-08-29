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

/* Element sticker code adapted from Marie Otsuka's Web Type syllabus */
$(function(){

	$("main").on("click", function(event){

		if ($(event.target).hasClass('element')){
			$(event.target).remove();
		} else{
			var element = event.target.tagName;
			var x = event.pageX;
			var y = event.pageY;

			// console.log(element);
			var sticker = '<div class="element" id="added" style="text-transform:lowercase">&lt;'+ element +'&gt</div>';
			$('main').append(sticker);
			
			$('#added').css({
			  	 top:y-20, 
			  	 left:x-20,
			 }).removeAttr('id');
		}
	});

	$(window).resize(function() {
	 	$('.element').each(function(){
	 		$(this).remove();
	 	});
	});

});

/* Up button rotation */
window.onscroll = function () {
    scrollRotate();
};
function scrollRotate() {
    let image = document.getElementById("up");
    image.style.transform = "rotate(" + window.pageYOffset/10 + "deg)";
}
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('#up').addClass("up-show");
  } else {
    $('#up').removeClass("up-show");
  }
});

/* Syllabus navigation activation */
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop() - 500;
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};
$(window).on('resize scroll', function() {
  if ($("#course-info").isInViewport()) {
    $("#nav1").addClass("nav-active");
    $("#nav2, #nav3, #nav4, #nav5, #nav6, #nav7").removeClass("nav-active");
  };
  if ($("#goals").isInViewport()) {
    $("#nav2").addClass("nav-active");
    $("#nav1, #nav3, #nav4, #nav5, #nav6, #nav7").removeClass("nav-active");
  };
  if ($("#structure").isInViewport()) {
    $("#nav3").addClass("nav-active");
    $("#nav1, #nav2, #nav4, #nav5, #nav6, #nav7").removeClass("nav-active");
  };
  if ($("#assessment").isInViewport()) {
    $("#nav4").addClass("nav-active");
    $("#nav1, #nav2, #nav3, #nav5, #nav6, #nav7").removeClass("nav-active");
  };
  if ($("#calendar").isInViewport()) {
    $("#nav5").addClass("nav-active");
    $("#nav1, #nav2, #nav3, #nav4, #nav6, #nav7").removeClass("nav-active");
  };
  if ($("#projects").isInViewport()) {
    $("#nav6").addClass("nav-active");
    $("#nav1, #nav2, #nav3, #nav4, #nav5, #nav7").removeClass("nav-active");
  };
  if ($("#resources").isInViewport()) {
    $("#nav7").addClass("nav-active");
    $("#nav1, #nav2, #nav3, #nav4, #nav5, #nav6").removeClass("nav-active");
  };
});