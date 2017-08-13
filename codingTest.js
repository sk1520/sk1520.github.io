
//https://codepen.io/anon/pen/OgZppL





                
          

$(function() { //jquery line of code to tell for the everything to be loaded before running scripts
    var width = 740;
    var animationSpeed = 2000;
    var pause = 4500;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('.image-container');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');

    var interval;
//console.log($slides.length);




    function startSlider() {
      if ( $(window).width() > 739) {      
  //Add your javascript for large screens here 

        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
              currentSlide++;

              console.log(currentSlide);  
                if (currentSlide == $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause)}
      }


function mobile() {
      if ( $(window).width() < 600) {      
  //Add your javascript for large screens here 

        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+400}, animationSpeed, function() {
              currentSlide++;

              console.log(currentSlide);  
                if (currentSlide == $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause)}
      }
 

    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

    startSlider();








       








    

    $('.sidebarBtn').on('click',function(){    //in mobile it registers a click twice so you have to set it off first and then on 
      $('.sidebar').toggleClass('active'); //when you click the sidebar button it will activate the active css class to the .sidebar class
      $(this).toggleClass('toggle');  //when the button is clicked it will give it toggle to switch to X and switch back to hamburger menu if clicked on X
    });
 

});