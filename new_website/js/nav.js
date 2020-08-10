$( document ).ready(function(){
  $(".dropdown-button").dropdown({ hover: true, belowOrigin: true});
  $('.button-collapse').sideNav({
    edge: 'left',
    closeOnClick: true,
    draggable: true
  });
  $('.side-nav a').click(function() {
    $('.button-collapse').sideNav('hide');
  });
  var dragTarget = document.getElementsByClassName('drag-target')[0];
  var mc = new Hammer.Manager(dragTarget);
  var Swipe = new Hammer.Swipe();
  var Tap = new Hammer.Tap();
  mc.add(Swipe);
  mc.on("swipeleft", function(ev) {
    $("#sidenav-overlay").remove();
  });
})
