// TODO: Which element is the following line of code selecting?
//The carousel variable is selecting the class of carouselbox
var carousel = document.querySelector(".carouselbox");

// TODO: Which element is the following line of code selecting?
//The next variable is selecting the class of next
var next = carousel.querySelector(".next");

//The prev variable is selecting the class of prev
var prev = carousel.querySelector(".prev");

var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/id/10/300/200",
  "https://picsum.photos/id/20/300/201",
  "https://picsum.photos/id/30/300/202",
  "https://picsum.photos/id/47/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
//This event listener is waiting for the click of the image that is being displayed
carousel.addEventListener("click", function() {

//Then it will take the user to the link of the image that is being displayed
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
//This event listener is waiting for the click of the next button
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
//The purpose of this line of code is to stop the event from bubbling up to the parent element
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
//This event listener is waiting for the click of the previous button
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
//If we didn't add this line of code then the event would bubble up to the parent element.
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
