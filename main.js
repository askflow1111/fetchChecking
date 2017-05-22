console.log('working');



fetch('https://api.airbnb.com/v2/reviews?client_id=3092nxybyb0otqw18e8nh5nty&listing_id=2056659&role=all')
  .then((response) => {
    return response.json()
  })
  .then((responseJson) => {
    console.log(responseJson);

  });