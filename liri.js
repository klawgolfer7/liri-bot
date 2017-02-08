var Twitter = require("twitter");

var client = new Twitter({
  consumer_key: 'M389Ck4WpwNHQ2Mlwlb1NOUsN',
  consumer_secret: 'dCAUfWvSNH6xmw75JipBB6yUq3M9L4cJ3stuwNSICPti80s4Ox',
  access_token_key: '297511027-OklWkTt224FdN43jtvkYvBX9qRTrqFZVvR9XXm3S',
  access_token_secret: '1cgfYSUb5HGX9UPGoRuF752rp2y0z8VMvBt0LDR35jdaE'
});

var myTweets = process.argv[2];

// var params = {screen_name: 'klaw1387'};
// client.get('statuses/user_timeline', myTweets, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });

// twitter.writeFile("log.txt", "Hey there!", function(err) {
// 	if(!err) {
// 		console.log("The file was saved!")
// 	}
// })
// }



var getMyTweets = function() {
  // var client = Twitter(keys.twitterKeys)

  var params = {
    screen_name: "klaw1387" 
  };

  client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log("");
        console.log(tweets[i].text);
      }
    }
  });
};

getMyTweets();


