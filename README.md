# Weather-API-AJAX-JSON
Challenge Practice Problem
==============
Requirements:

1. Get 2 types of data using AJAX from weather.gov's API. 

This is the URL to use. It is for San Francisco: 
https://api.weather.gov/gridpoints/MTR/88,126/forecast/hourly 
Please use jQuery's .ajax() function. The examples at the bottom of this page will help: http://api.jquery.com/jQuery.ajax/ 
The JSON that gets returned is long, so here's a hint. Assuming I'm calling the response jsonResponse, a short word like "Rain" will be returned from jsonResponse.properties.periods[0].shortForecast. Experiment with what else you can find in jsonResponse.properties.periods[0] and pick one other piece of data to pluck out.

2. The AJAX request must carry out a function on success that adds your retrieved data to the html with jQuery, and and an error message to your html on error. These should appear in your result window when the project is run. No need to style anything.
To test the error message, introduce a typo into the URL string (for example). 
The error message can be anything you want; no need to reproduce the error message returned from the AJAX request.

3. Create a Promise that changes the background color of your page after the AJAX request is complete.
You do not need to use the new Promise syntax. You can simply chain your functionality onto the end.
This should happen even if your AJAX request errored out.
