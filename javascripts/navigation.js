$(document).ready(function(){
  $(".close-nav").click(function(){
    $(".close-nav").hide();
    $(".open-nav").show();
    $(".navigation-block-mob").animate({
    'margin-top' : "-100%",
    'opacity' : '0'
    },200);
  });

  $(".open-nav").click(function(){
    $(".open-nav").hide();
    $(".close-nav").show();
    $(".navigation-block-mob").animate({
    'opacity' : '1',
    'margin-top' : "0%"
    },100);
  });
});




// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 10;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("div .navigation-link-con a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector("div .navigation-link-con a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

