$(document).ready(function () {
  const $panels = $(".panel");

  $panels.on("click", function () {
    $panels.removeClass("active");
    $(this).addClass("active");
  });
});
