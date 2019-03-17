const successCallback = function(data){
    const shortForecast = data.properties.periods[0].shortForecast;
    const windDirection = data.properties.periods[0].windDirection;
    const twoProperties = `The forecast is ${shortForecast} with a wind blowing ${windDirection}.`;
    $("#forecast").text(twoProperties);
};

const errorCallback = function(){
    $("body").css("background-color","red");
    $("#forecast").text('Error Message');
};

const changeBodyColorCallback = function(){
  $("body").css("background-color","blue");
};

const jqxhr = $.ajax('https://api.weather.gov/gridpoints/MTR/88,126/forecast/hourly');

jqxhr.then(successCallback)
     .then (changeBodyColorCallback)
     .catch(errorCallback);
