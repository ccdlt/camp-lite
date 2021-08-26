const axios = require('axios');
const apiKey = require('../config');
const xml2js = require('xml2js');


module.exports = {
  getCampgrounds: ({ data }, callback) => {
    let url;
    if (data.state && data.amenity) {
      url = `http://api.amp.active.com/camping/campgrounds/?pstate=${data.state}&amenity=${data.amenity}&api_key=${apiKey.api}`;
    } else {
      url = `http://api.amp.active.com/camping/campgrounds/?pstate=${data.state}&api_key=${apiKey.api}`;
    }

    axios({
      method: 'GET',
      url: url,
    })
      .then((res) => {
        console.log('data', res.data)
        const final = xml2js.parseStringPromise(res.data)
          .then((result) => {
            const json = JSON.stringify(result, null, 4);
            callback(null, json)
          })
          .catch((err) => console.log('Parsing Error', err));
      })
      .catch((err) => console.log('err in controller', err))
  }
//X-Originating-IP: 98.37.152.202
}