$(document).ready(function() {
  
  const renderTweets = function(tweets) {
    const container = $('#tweets-container');
    for (const element of tweets) {
      const $tweet =  createTweetElement(element);
       container.prepend($tweet);
    }
    return container
  };

  const createTweetElement = function(tweet) {//Tweet box design
    let $tweet = `
    <div class="tweets-container">
    <div id="names">
    <img src="${tweet.user.avatars}">${tweet.user.name}
      <div id="username">
        ${tweet.user.handle}
      </div>
    </div>
<div style="align-self: center" name="text" id="tweet-text2" class="tweet-text">
${tweet.content.text}
</div>
<div class="time">
  ${timeago.format(tweet.created_at)}
  <div class="icon">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
  <i class="fas fa-heart"></i>
</div>
</div>`
    
return $tweet;
  };

  const loadTweets = function() { //Load the past tweets
    $.ajax({
      url: '/tweets',
      method:'get',
      success:function(data) {
        console.log("succeessfully got the data from the server");
        console.log("data", data)
        renderTweets(data)
      },
      error:function() {
        console.log("error");
      }
    });
  };

  loadTweets()

  $('#tweet-form').submit(function(event) { //This function controls the tweet behavior.
    event.preventDefault();
    const errorContainer = $('#error-container')
    const data = $(this).serialize();
    $('#error-container').slideUp( 'slow', 
    () => {
      errorContainer.text("")
    } )
    if(data.length > 145) {
    $('#error-container').slideDown( 'slow', 
    () => {
      errorContainer.prepend("Tweeet Limit is 140!")
    } )
    return errorContainer
     }
     if(data.length === 5) {
      return alert("Say something!")
    }
    $.ajax({
      url:'/tweets',
      method:'post',
      data:data,
      success:function(data) {
        console.log("successfully sent the data to the server");
        loadTweets()
        $('#tweet-text').val('')
        },
      error:function() {
        console.log("error");
      }
    });
    $('#counter').text('140')
  });
  
  $('.fa-angle-double-down').click(function(event) { //compose Tweet
    event.preventDefault();
    const container = $('#container')
     container.slideDown( 'slow', 
    () => {
     return container
    })
     });
   });



  
    
  

