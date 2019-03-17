const jqxhr = $.ajax('https://api.weather.gov/gridpoints/MTR/88,126/forecast/hourly');

jqxhr.done(function(res){
  const shortForecast = res.properties.periods[0].shortForecast;
  console.log(shortForecast);//"Showers And Thunderstorms"
  const windDirection = res.properties.periods[0].windDirection;
  console.log(windDirection);//W
  const windSpeed = res.properties.periods[0].windSpeed;
  console.log(windSpeed);//"18 mph"
  const temperature = res.properties.periods[0].temperature;
  console.log(temperature);//57
  const temperatureUnit = res.properties.periods[0].temperatureUnit;
  console.log(temperatureUnit);//F  
})
  .then(function(){
    alert( "success" );
  }, function (){
    alert( "error" );
 });


// (function() { //want to change background color 
//    document.body.css('background-color':'blue')
//   })

// .then (function(){
//    $(#foo).click(change() {
//    $(body).css("background-color":"blue");
// });
// }); 

// $.ajax({
//     type:"GET",
//     url:"https://aws.random.cat/meow",
//     success: function(data) {
//      console.log(data)
//     $("#test").append("<img height=150 width=150 src=" + data.file + " />")
//     },
//   });