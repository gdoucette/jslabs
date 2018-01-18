$(document).ready(function() {
    $('#weatherLocation').click(function() {
      let city = $('#userLocation').val();
      $('#userLocation').val("");
      $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather',
        type: 'GET',
        data: {
            appid: "78e4c7135a14d6d0059350df488d47bf",
            q: city

        },
        format: 'json',
        success: function(response) {
        console.log(response);
        console.log(typeof response);
          $('.Humidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
          $('.Temp').text(`The temperature in Kelvins is ${response.main.temp}.`);
          $('.Current').text(`Currently: ${response.weather["0"].description}.`); 
          changebackground(response.weather["0"].id);
        },


        error: function() {
          $('#errors').text("There was an error processing your request. Please try again.")
        }
      });
    });
  });

 function changebackground(id){

   
    var idStr = id.toString();
    var sliced = idStr.slice(0,1)
    console.log(sliced)
     
    if (sliced == "5"|| sliced == "3"){
        console.log("RAIN!!!");
        document.getElementById("result").style.background = "blue";
    }

    if (sliced == "2"){
        console.log("THUNDER!")
        document.getElementById("result").style.background = "gray";

    }

    if (sliced == "6"){
        console.log("Snow!")
        document.getElementById("result").style.background = "AliceBlue";
    }

    if (id == "800"){
        console.log("Clear!")
        document.getElementById("result").style.background = "yellow";
    }
    
    


};



