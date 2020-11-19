$('#op-menu-open').click(function(event) {
  $("#op-menu-open").hide();
  $("#op-menu-close").show();

  $('.op-menu-navbar').slideDown();
  return false;
});

$('#op-menu-close').click(function(event) {
  $('#op-menu-close').hide();
  $("#op-menu-open").show();

  $('.op-menu-navbar').slideUp();
  return false;
});

$('.op-menu-trigger').click(function(event) {
  event.preventDefault();
  event.stopPropagation();
  $(this).parent().children('.op-submenu').slideToggle();
  
  return false;
});
