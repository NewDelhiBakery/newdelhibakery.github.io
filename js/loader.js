$(document).ready(function(){

  $('.buttons').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var filter = $(this).attr('data-filter');
    if (filter == 'all') {
      $('.image').show(400);
    }
    else {
      $('.image').not('.' + filter).hide(200);
      $('.image').filter('.' + filter).show(400);
    }

  });
  $('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: { enabled: true }
  });
  
    $('.modal').modal();
    $('.pushpin').pushpin();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider({full_width: true});
    $('.myreviews').carousel({
        
        numVisible: 7,
        shiftValue: 1,
        padding: 150,
    });
    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip({

        inDuration: 100,
        enterDelay: 500,
        exitDelay: 100,
        outDuration: 500,
    });
    $(".dropdown-trigger").dropdown();
    $('.collapsible').collapsible();
    $('.scrollspy').scrollSpy();
    
    
})








// push pin
$('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });


$(function(){
  var scroll = $(document).scrollTop();
  var navHeight = $('.navbar-fixed').outerHeight();
  $(window).scroll(function(){
    var scrolled = $(document).scrollTop();
    if (scrolled > navHeight){
      $('.navbar-fixed').addClass('animate');
    }
    else{
      $('.navbar-fixed').removeClass('animate');
    }
    if(scrolled > scroll){
      $('.navbar-fixed').removeClass('sticky');
    }else{
      $('.navbar-fixed').addClass('sticky');
    
    }
    scroll = $(document).scrollTop();
  })

  
}
)
