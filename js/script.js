$(document).ready(function () {
  /* mobile-nav*/
  $(".toggle-btn").click(function () {
    let nav = $(".nav-links");
    let icon = $(".toggle-btn i");
    if (nav.hasClass("open-btn")) {
      nav.removeClass("open-btn");
    } else {
      nav.addClass("open-btn");
    }

    if (icon.hasClass("fa-bars")) {
      icon.addClass("fa-times");
      icon.removeClass("fa-bars");
    } else {
      icon.addClass("fa-bars");
      icon.removeClass("fa-times");
    }
  });
});

$(window).resize(function () {
  var viewportWidth = $(window).width();
  if (viewportWidth > 767) {
    var nav = $(".nav-links");
    var icon = $(".toggle-btn i");
    if (nav.hasClass("open-btn")) nav.removeClass("open-btn");

    if (icon.hasClass("fa-bars")) {
    } else {
      icon.addClass("fa-bars");
      icon.removeClass("fa-times");
    }
  }
});
