$(".tohide").hide();
$(".button-web").on("click", function() {
  var target = $(this).data("target");
  if(target!==undefined) {
    $(target).toggle();
      jQuery('#graphisme').hide();
  }
});


$(".button-graphisme").on("click", function() {
  var target = $(this).data("target");
  if(target!==undefined) {
    $(target).toggle();
      jQuery('#web').hide();
  }
});