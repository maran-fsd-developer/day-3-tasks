// DAY3 TASK
//Q.NO:2

var request = new XMLHttpRequest(); 

request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () { 
    var result = JSON.parse(request.response);
    console.log(result);
    for (var i = 0; i < result.length; i++) { 
        var countryFlag = result[i].flags.svg; 
        console.log("Country Flag: " + countryFlag);
    }
};
