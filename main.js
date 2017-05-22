console.log('working');

fetch('http://api.airbnb.com/v2/reviews?client_id=3092nxybyb0otqw18e8nh5nty&listing_id=2056659&role=all')
  .then(function(response) {
    response.json()
      .then(function(lastFmData){
        console.log(lastFmData);
      })});