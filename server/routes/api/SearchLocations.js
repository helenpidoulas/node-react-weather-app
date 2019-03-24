const fetch = require('node-fetch');
const generateWebAppURL = require('server/utils').generateWebAppURL;
//API URL with user zip
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
//API KEY
const apiId = '&appid=8a1a3cc956c204ebbbd40834bdd9dc38&units=metric';

module.exports = (app) => {

  app.post('/search-location-weather', (req, res) => {
    const requestBody = req.body;
    const apiUrl = generateWebAppURL(requestBody.locationType, requestBody.locationData);

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        res.redirect('/error');
      });
  });
};
