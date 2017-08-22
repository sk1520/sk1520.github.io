
//https://codepen.io/anon/pen/OgZppL





                
          

$(function() { //jquery line of code to tell for the everything to be loaded before running scripts
    var width = 800;
    var percents= parseInt()
    var animationSpeed = 2000;
    var pause = 4500;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('.image-container');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');

    var interval;
//console.log($slides.length);



function scrollTo (){// scrolling down to we offer div when button is clicked
          if ($(window).width() > 800) {//scrolls to certain point if certain screen size is met
          $("#scroll-button").click(function(){
            $("html,body").animate({
              scrollTop: $('.list-descriptions-container').offset().top-15

            },2000)
          })
        }
                else{// scroll stops a little earlier in mobile 
                    $("#scroll-button").click(function(){
                      $("html, body").animate({
                        scrollTop: $(".list-descriptions-container").offset().top-100
                      },2000)
                    })
                  }
   };





    function startSlider() { // slider changes pictures
      if ( $(window).width() > 800) {      
 

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


function mobileSlider() {//slider changes pictures in mobile
      if ( $(window).width() < 800) {      
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
 

    function pauseSlider() {//will pause if mouse hovers over one of the pictures in the slider
        clearInterval(interval);
    }

    if ($(window).width()>600){
    $slideContainer.on('mouseenter', pauseSlider).on('mouseleave', startSlider);}//pauses the slider if mouse enters and resumes when mouse leaves



    startSlider();
    mobileSlider();
    scrollTo();







       








    

    $('.sidebarBtn').on('click',function(){    //in mobile it registers a click twice so you have to set it off first and then on 
      $('.sidebar').toggleClass('active'); //when you click the sidebar button it will activate the active css class to the .sidebar class
      $(this).toggleClass('toggle');  //when the button is clicked it will give it toggle to switch to X and switch back to hamburger menu if clicked on X
    });
 

});