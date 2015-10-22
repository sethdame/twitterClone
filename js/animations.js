$('document').ready(function(){
  //hide character count and tweet button
  $('#tweet-submit').hide();
  $('#char-count').hide();

//show character count, tweet function, and double text field size

$('.tweet-compose').on('click', function(){
  $('#tweet-submit').show();
  $('#char-count').show();
  $('.tweet-compose').css({"height": "5em"});
});

//decrement character count, change color, disable button
/**$('.tweet-compose').keypress(function(){
   var charCount = $('#char-count').text();
   var num = parseInt(charCount);
   num--;
   var thing = num.toString();
   $("#char-count").text(thing);
   if(num<=10){
     $("#char-count").css({color: "red"});
   }
   if(num<0){
     $("#tweet-submit").prop('disabled',true);
   }
});*/

//increment char count
$('.tweet-compose').keydown(function(){
  var cc = $(this).val().length;
  var maxNum = 140;
   $("#char-count").text(maxNum -= cc);
   if(maxNum<=10){
     $("#char-count").css({color: "red"});
   }
   else if(maxNum < 0){
     $("#tweet-submit").prop('disabled',true);
   }
   else{
     $("#char-count").css({color: "#999"});
     $("#tweet-submit").prop('disabled',false);
   }
});
//adds new tweet to stream
$('.button').on('click', function () {
    $('#stream').prepend(addNewTweet);
});

//hide retweet button etc, and stats
$('div.stats, div.reply').hide();
$('.tweet-actions').hide();

//show and hide retweet button, etc
$('.content').hover(function(){
  $(this).find('.tweet-actions').show();
}, function(){
  $(this).find('.tweet-actions').hide();
});

//making it so clicking multiple times produces different result
var handlers = [
//first click
  function(){$(this).find('div.stats,div.reply').show();},
//second click
  function(){$(this).find('div.stats, div.reply').hide();}
];

var counter = 0;

//function regarding clicking on tweet to make stats appear and disappear
$(".content").click(function() {
    handlers[counter++].apply(this, Array.prototype.slice.apply(arguments));
    counter %= handlers.length;
});

//create new field for tweet in stream
function addNewTweet() {
    var newTweetText = $('.tweet-compose').val();

    var newTweet = '<div class="tweet">' +
        '<div class="content">' +
        '<img class="avatar" src="img/alagoon.jpg">' +
        '<strong class="fullname">kejcbsn  </strong>' +
        '<span class="username">@kejcbsn</span>' +
        '<p class ="tweet-text">' + newTweetText + '</p>' + '<div class = "tweet-actions">' + '<ul>' + '<li>' + '<span class = "icon action=retweet"> </span> Reply</li>' + '<li><span class="icon action-retweet"></span> Retweet</li>' + '<li><span class="icon action-favorite"></span> Favorite</li>' + '<li><span class="icon action-more"></span> More</li>' + '<div class="stats">' + '<div class="retweets">' + '<p class="num-retweets">30</p>' + '<p>RETWEETS</p>' + '</div>' + '<div class="favorites">' + '<p class="num-favorites">6</p>' + '<p>FAVORITES</p>' + '</div>' + '<div class="users-interact">' + '<img src="img/alagoon.jpg" />' + '<img src="img/vklimenko.jpg" />' + '</div>' + '</div>' +
    // '<p class="tweet-text">this text literally shows up</p>'
    '</div></div></ul></div';

    return newTweet;
}

});
