(function() {
  "use strict";

  $(".menu button").click(function(event) {

    event.preventDefault();

    var windowPosition = -Math.abs(window.pageYOffset);

    if ($("body").hasClass("menu-open")) {
      $("window").scrollTop(500);
      $("body").removeClass("fixed").removeClass("menu-open").removeAttr("style");
      $("html").removeClass("body-menu");
    } else {
      $("body").css('top', windowPosition).addClass("menu-open").addClass("fixed");
      $("html").addClass("body-menu");
    }
  });
})();

