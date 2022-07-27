$(function(){
  
    $('#allBtn').click(function(){
       
        $(this).toggleClass('.menu-trigger');
        
        $('#gnb2').css('opacity',1).slideToggle();       
  
     
    })


})


$(function(){

    const menuTrigger = document.querySelector('.menu-trigger');
  
    menuTrigger.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('active');
    });
  
  
    })
  
  

    


$(function () {
	$('li > a').click(function (){
    	$('html, body').animate({scrollTop: $(this.hash).offset.top}, 300);
    });
});



