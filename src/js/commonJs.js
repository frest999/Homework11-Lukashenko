$(document).ready(function () {

  $(".nav-block li a").addClass("nav-arrow-js");
  var fadeblock = $(".nav-fade-mens");
  $("#mens-js").on("click", function (e) {
    $(this).toggleClass("nav-arrow-js");
    fadeblock.fadeToggle();
  });
  $(document).on("click", function(e) {
    if (!$(e.target).closest(".nav-block").length) {
      fadeblock.hide();
      if(fadeblock.hide()) {
        $("#mens-js").addClass("nav-arrow-js");
      }
    }
    e.stopPropagation();
  });

  var fadeblock2 = $(".nav-fade-womens");
  $("#womens-js").on("click", function (e) {
    $(this).toggleClass("nav-arrow-js");
    fadeblock2.fadeToggle();
  });
  $(document).on("click", function(e) {
    if (!$(e.target).closest(".nav-block").length) {
      fadeblock2.hide();
      if(fadeblock2.hide()) {
        $("#womens-js").addClass("nav-arrow-js");
      }
    }
    e.stopPropagation();
  });

  var fadeblock3 = $(".nav-fade-brands");
  $("#brand-js").on("click", function (e) {
    $(this).toggleClass("nav-arrow-js");
    fadeblock3.fadeToggle();
  });
  $(document).on("click", function(e) {
    if (!$(e.target).closest(".nav-block").length) {
      fadeblock3.hide();
      if(fadeblock3.hide()) {
        $("#brand-js").addClass("nav-arrow-js");
      }
    }
    e.stopPropagation();
  });

  $(".elements-gride").masonry({
    // options
    itemSelector: ".element-item",
    columnWidth: 300
  });

  $("#mobile-btn").on("click", function () {
    $(".nav-mobile").slideToggle();
  });

  $(".btns-filter").on("click", function () {
    $(".filtres-list").slideToggle();
  });
 });

