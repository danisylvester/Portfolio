/*Tooltip for Find Me icons on side nav */

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

  /*Navbar color change when scroll*/
$(function () {
  $(document).scroll(function () {
    var nav = $(".navbar");
    nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
    });
  });