define(function(require) {
  var $ = require("jquery");
  var bootstrap = require("bootstrap");
  var hbs = require("hbs");
  var _ = require("lodash");
  var fb = require("firebase");
  var chkinput = require("check-input");
  var get = require("get-data");
  var pop = require("populate-dom");
  var templates = require("get-templates");

  var test = function(data){
    console.log("jesse - data from server", data);
  };

  $("#searchBtn").on("click", function(){
    var zipCode = chkinput.chkinput();
    $(".weatherContainer").removeClass("hidden");
    console.log(zipCode);
    get.getWeather(zipCode, 1, pop.showWeather);
  });

  $(document).on("click",'#3Day', function(){
    var zipInput = $("#zipInput").val();

    console.log('click');

    get.getWeather(zipInput, 4, pop.show3DayWeather);

  $(".multipleDay").toggleClass("hidden");
});

$(document).on("click",'#7Day', function(){
  var zipInput = $("#zipInput").val();
   get.getWeather(zipInput, 8, pop.show7DayWeather);
    $(".multipleDay").toggleClass("hidden");
  

});


});
