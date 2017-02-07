var twitter = require("twitter");

var client = new twitter({
  consumer_key: 'M389Ck4WpwNHQ2Mlwlb1NOUsN',
  consumer_secret: 'dCAUfWvSNH6xmw75JipBB6yUq3M9L4cJ3stuwNSICPti80s4Ox',
  access_token_key: '297511027-OklWkTt224FdN43jtvkYvBX9qRTrqFZVvR9XXm3S',
  access_token_secret: '1cgfYSUb5HGX9UPGoRuF752rp2y0z8VMvBt0LDR35jdaE'
});

var myTweets = process.argv[2];

var params = {screen_name: 'klaw1387'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

// client.get('search/tweets', {q: '@klaw1387'}, function(error, tweets, response) {
//    console.log(tweets);
// });