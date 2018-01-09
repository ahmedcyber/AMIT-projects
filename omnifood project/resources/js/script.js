$(document).ready(function(){
    /*sticky navigation*/
  $('.js--feature').waypoint(function(direction) {
      if (direction == 'down'){
          $('nav').addClass('sticky');   
      } else{
          $('nav').removeClass('sticky');
                        } 
  }, {
  offset: '75px;'
});
    
    /*scroll on buttons */
    $('.js--scroll-omniplan').click(function () {
        $('html, body').animate({scrollTop: $('.js--omniplan').offset().top}, 3000);
        
    }); 
    $('.js--scroll-feature').click(function () {
        $('html, body').animate({scrollTop: $('.js--feature').offset().top}, 1500);
        
    });
    
    /*navigation scroll*/
$(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 2000);
            return false;
          }
        }
      });
    });
                             }); 
/*animation on scroll*/
$('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated slideInDown');
},{
    offset:'40%'
    })
$('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated flipInX');
},{
    offset:'70%'
    })
$('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated rollIn');
},{
    offset:'70%'
    })
$('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated flash');
},{
    offset:'40%'

    
})

$('.js--wp-5').waypoint(function(direction){
    $('.js--wp-5').addClass('animated tada');
},{
    offset:'40%'

    })

$('.js--wp-6').waypoint(function(direction){
    $('.js--wp-6').addClass('animated zoomIn');
},{
    offset:'40%'

    
})


/*
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
*/

