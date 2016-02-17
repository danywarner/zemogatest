(function(){
  
var counter = 0; // to keep track of current slide
var    $items = document.querySelectorAll('#slider figure'); // a collection of all of the slides, caching for performance
var   numItems = $items.length; // total number of slides
// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
  if (counter == -1) {
    counter = numItems-1;
  }
  var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
  
  // remove .show from whichever element currently has it 
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });
  
  // add .show to the one item that's supposed to have it
  $items[itemToShow].classList.add('show');    
};

// add click events to prev & next buttons 
document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);

function toggleMenu(menu) {

  switch(menu) {
    case "services":
      document.getElementById("softwareMenu").classList.remove("menuShown");
      document.getElementById("connectMenu").classList.remove("menuShown");
      document.getElementById("servicesMenu").classList.toggle("menuShown");
      break;
    case "software":
      document.getElementById("servicesMenu").classList.remove("menuShown");
      document.getElementById("connectMenu").classList.remove("menuShown");
      document.getElementById("softwareMenu").classList.toggle("menuShown");
      break;
    case "connect":
      document.getElementById("softwareMenu").classList.remove("menuShown");
      document.getElementById("servicesMenu").classList.remove("menuShown");
      document.getElementById("connectMenu").classList.toggle("menuShown");
      break;
  }

}
 
document.querySelector('#services').addEventListener('click', function() {

      toggleMenu("services");
      
  }, false);

document.querySelector('#software').addEventListener('click', function() {

      toggleMenu("software");
     
  }, false);

document.querySelector('#connect').addEventListener('click', function() {

      toggleMenu("connect");
     
  }, false);



})();  

// document.addEventListener("DOMContentLoaded", function(event) { 
//   alert("hey");
// });