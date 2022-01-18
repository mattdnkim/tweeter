$(document).ready(function () {
  const maxChar = 140;
  $("#tweet-text").keyup(function () {
    let content = $(this).val();
    $("#counter").text(maxChar - content.length);
    if (content.length > 140) {
      $("#counter").css("color", "red");
    } else {
      $("#counter").css("color", "#545149");
    }
  });
});
