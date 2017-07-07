
//https://codepen.io/anon/pen/OgZppL

var image_tracker= 0;


var image_tracker= 0;
function imageChange(){

  
   

    if(image_tracker == 0){
       $('#interval-image').hide();
      $('#interval-image').fadeIn(500);
       $('#interval-image').attr('src', 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/15625310_1272756956124985_3779963303749484544_n.jpg')

   image_tracker ++;
  }
     
    
   else if(image_tracker == 1){
    $('#interval-image').hide();
      $('#interval-image').fadeIn(500);
  $('#interval-image').attr('src', 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/17586737_1344220928957791_474045629337698304_n.jpg'); 
    image_tracker ++;
     
     
  }
  else{
       
  $('#interval-image').hide();
      $('#interval-image').fadeIn(500);
      $('#interval-image').attr('src', 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/19120672_138833393342644_1357844242659016704_n.jpg'); 
   
    image_tracker =0;
  }
 

}
  
                
                


$(function() {
    setInterval( 'imageChange()', 8000);
    
});