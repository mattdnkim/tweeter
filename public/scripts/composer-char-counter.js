

$(document).ready(function() {
  const maxChar = 140;
  $("#tweet-text").keyup(function() {
    let content = $(this).val();
    $("#counter").text(maxChar - content.length);
  });
});

