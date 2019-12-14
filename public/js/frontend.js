$("#home").hide();
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
  $("#home").fadeIn(25ç00);
  $(".hero-full-screen").addClass("slideOutUp animated slower").fadeOut(1500);
});
