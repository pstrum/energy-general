(function() {
  $("footer button").click(function() {
    $(this).find(".scroll-top").addClass("to-top");
    $("html, body").delay(1000).animate( {
      scrollTop: 0
    }, 1000, function() {
      $(".scroll-top").removeClass("to-top");
    });
  });
})();

