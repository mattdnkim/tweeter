

$(document).ready(function() {
//   $("this").input(function() {
//     console.log(this);
//   });
  const maxChar = 140;
  $("#tweet-text").keyup(function() {
    let content = $(this).val();
    $("#counter").text(maxChar - content.length);
  });
});

