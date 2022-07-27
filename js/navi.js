$(function(){
  

    $('#allBtn').click(function(){
       
        $(this).toggleClass('fa');
        
        $('#gnb2').css('opacity',1).slideToggle();        
        
    
      
    })
     
        


})


$(function () {
	$('li > a').click(function (){
    	$('html, body').animate({scrollTop: $(this.hash).offset.top}, 300);
    });
});


