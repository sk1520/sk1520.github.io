
//https://codepen.io/anon/pen/OgZppL

var image_tracker= 0;


var image_tracker= 0;
function imageChange(){

  
   

    if(image_tracker == 0){
       
       $('#interval-image').attr('src', 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/19436250_100501617256984_4799286182712180736_n.jpg')

   image_tracker ++;
  }
     
    
   else if(image_tracker == 1){
  
  $('#interval-image').attr('src', 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/19367615_1892480557681308_1451688882939625472_n.jpg'); 
    image_tracker ++;
     
     
  }
  else{
       
  
      $('#interval-image').attr('src', 'https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/19120672_138833393342644_1357844242659016704_n.jpg'); 
   
    image_tracker =0;
  }
 

}
  
                
                


$(function() {
    setInterval( 'imageChange()', 3000);
    
});