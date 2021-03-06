weatherApp.service("cityService", function() {
  this.city = "San Francisco, CA";
});

weatherApp.service('weatherService', function($resource) {
  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?APPID=";
  var key = '4f1a736c3d25da664b1152de4574f2d5';

  this.getWeather = function(city, days) {

    var weatherAPI = $resource(url + key,
      { callback: 'JSON_CALLBACK' },
      { get: { method: 'JSONP' } });

    return weatherAPI.get({ q: city, cnt: days });
  }
});

weatherApp.service("textFormattingService", function() {

  this.capitalizeFirstLetter = function(text) {
    var textArr = text.split(" ");
    var updatedTextArr = [];

    textArr.forEach(function(word) {
      var capitalizedWord = word.slice(0,1).toUpperCase() + word.slice(1);
      updatedTextArr.push(capitalizedWord)
    });

    return updatedTextArr.join(" ");
  }
})
