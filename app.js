const axios = require('axios');
require('dotenv').config();
 
// Make a request for a user with a given ID
axios.get('https://api.giphy.com/v1/gifs/search?api_key='+ process.env.API_KEY+'&q=Lebron&limit=25&offset=0&rating=G&lang=en')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
