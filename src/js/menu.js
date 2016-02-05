(function() {
  $(".menu button").click(function() {
    $(this).toggleClass("menu-open");
    $(".menu-slide").toggleClass("menu-open");
    $("body").toggleClass("menu-open");
  });
})();
