(function() {
  $(".menu button").click(function() {
    console.log("click1");
    $(this).toggleClass("menu-open");
    $(".menu-slide").toggleClass("menu-open");
    $("body").toggleClass("menu-open");
  });
})();
