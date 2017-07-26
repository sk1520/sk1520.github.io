
//https://codepen.io/anon/pen/OgZppL

var image_tracker= 0;  //image tracker is set to 0



function imageChange(){ //functions to change pictures in the home page

  
   

    if(image_tracker == 0){   // if the tracker equals to 0 sets the image 
       
       $('#interval-image').attr('src', 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/19436250_100501617256984_4799286182712180736_n.jpg')

   image_tracker ++;
  }
     
    
   else if(image_tracker == 1){ //if the image is 1 set the image to another
  
  $('#interval-image').attr('src', 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/19367615_1892480557681308_1451688882939625472_n.jpg'); 
    image_tracker ++;
     
     
  }
  else{ // if the image is anything else besides 1 or 0 it will be set to another image
       
  
      $('#interval-image').attr('src', 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/19120672_138833393342644_1357844242659016704_n.jpg'); 
   
    image_tracker =0; //resets tracker
  }
 

}

                
          

$(function() { //jquery line of code to tell for the everything to be loaded before running scripts
    setInterval( 'imageChange()', 3000); //sets the time of when the images will change
    

    $('.sidebarBtn').off('click').on('click',function(){    //in mobile it registers a click twice so you have to set it off first and then on 
      $('.sidebar').toggleClass('active'); //when you click the sidebar button it will activate the active css class to the .sidebar class
      $(this).toggleClass('toggle');  //when the button is clicked it will give it toggle to switch to X and switch back to hamburger menu if clicked on X
    });
 

});