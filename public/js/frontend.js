$("#home").hide();
// $('#nav').hide();
$("#scrollButton").hide();

$("#nameButton").on("click", function() {
  $("#scrollButton").fadeIn(5000);
  $("#h1")
    .fadeOut(1000)
    .text("Hello ______ , Click below to continue")
    .fadeIn(5000);
  $("#input").hide();
  $("#nameButton").hide();
});

$("#sliderButton").on("click", function() {
  $("#home")
    .addClass("slideInUp animated slower 1s")
    .fadeIn(1000);
  $(".hero-full-screen")
    .addClass("slideOutUp animated slower")
    .fadeOut();
  $("#bg").addClass("heartBeat animated faster");
});

$("[data-menu-underline-from-center] a").addClass("underline-from-center");
