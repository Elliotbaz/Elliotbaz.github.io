$(document).ready(function(){

/* FOR STICKY NAVIGATION*/
$('.js--section-part2').waypoint(function(direction){
  if (direction == 'down'){
    $('nav').addClass('sticky');
  }
    else{
      $('nav').removeClass('sticky');
      }
},{
  offset: '90px;'
});


/* Scrool on bottons*/
$('.js--scrool-to-plan').click(function(){
  $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},5000);

});

$('.js--scroll-to-part2').click(function(){
  $('html,body').animate({scrollTop: $('.js--section-part2').offset().top},2000);
});


/* Navigation scroll */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});


/*Animate on scroll*/
$('.js--animate-1').waypoint(function(direction){
  $('.js--animate-1').addClass('animated fadeInUp');
},{offset: '50%'});


$('.js--animate-2').waypoint(function(direction){
  $('.js--animate-2').addClass('animated bounceInUp');
},{
  offset: '50%'
});


$('.js--animate-3').waypoint(function(direction){
  $('.js--animate-3').addClass('animated fadeIn');
},{
  offset: '50%'
});

$('.js--animate-4').waypoint(function(direction){
  $('.js--animate-4').addClass('animated heartBeat');
},{
  offset: '50%'
});


/*STEPS FOR MOBILE*/

$('.js--step-1').waypoint(function(direction){
  $('.js--step-1').addClass('animated slideInLeft');
},{
  offset: '50%'
});

$('.js--step-2').waypoint(function(direction){
  $('.js--step-2').addClass('animated slideInRight');
},{
  offset: '50%'
});


$('.js--step-3').waypoint(function(direction){
  $('.js--step-3').addClass('animated slideInLeft');
},{
  offset: '70%'
});


/*Mobile Navigation*/
$('.js--nav-icon').click(function(){
  var nav = $('.js--main-nav');
  var icon = $('.js--nav-icon i');
    nav.slideToggle(200);

if (icon.hasClass('ion-android-menu')){
  icon.addClass('ion-android-close');
  icon.removeClass('ion-android-menu');
  icon.css('color', '#43b962');
}
else{
  icon.addClass('ion-android-menu');
  icon.removeClass('ion-android-close');
  icon.css('color', '#f34e42');
}
  $('.js--main-nav').css('display','grid');
});

});
