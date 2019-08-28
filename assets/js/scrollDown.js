$(document).ready(function(){

  var tabBar = $('.tabBar');
  var top = $('.topBtn');

  tabBar.hide();

  $(window).scroll(function(){
    tabBar.fadeIn(2000);

  });

});
