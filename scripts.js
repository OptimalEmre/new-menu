$('#menu--open').click(function(event) {
  $("#menu--open").hide();
  $("#menu--close").show();

  $('.main-menu').slideDown();
  return false;
});

$('#menu--close').click(function(event) {
  $('#menu--close').hide();
  $("#menu--open").show();

  $('.main-menu').slideUp();
  return false;
});

$('.menu__trigger').click(function(event) {

  event.preventDefault();
  event.stopPropagation();
  $(this).parent().children('.sub-menu').slideToggle();

  return false;
  
});


$.cart_count = "14";

if ($.cart_count == "")
  $(".shopping-cart__count").hide();
else {
  $(".shopping-cart__count").show();
  $(".shopping-cart__count").html($.cart_count);
}



