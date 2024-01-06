let Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = ["January" , "February" , "March" , "April" , "May" , "June", "July" , "August" ,"September" , "October", "November" ,"December"];
let date = new Date();
document.querySelector(".aaa").innerHTML= date.getDate()+month[date.getMonth()];
function getDayInCard(){
    document.querySelector(".date .day").innerHTML = Days[date.getDay()];
    if(date.getDay() == 5){
        document.querySelector(".date-two").innerHTML = Days[(date.getDay() + 1)];
        document.querySelector(".date-there").innerHTML = Days[0];
    }
    else if (date.getDay() == 6) {
        document.querySelector(".date-two").innerHTML = Days[0];
        document.querySelector(".date-there").innerHTML = Days[1];
    }
    else{
        document.querySelector(".date-two").innerHTML = Days[(date.getDay() + 1)];
        document.querySelector(".date-there").innerHTML = Days[(date.getDay() + 2)];
    }

    console.log(date.getDate());
   
}

getDayInCard()



async function getWeather(country) {
    let api = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4dc6964cdc4943d8976151714240201&q=${country}&days=3`);
    resalut = await api.json();
    document.querySelector(".content p").innerHTML = resalut.location.name;
    document.querySelector(".degree .num").innerHTML = resalut.current.temp_c + `<sup>o</sup>C`;
    document.querySelector(".content .icon img").src = resalut.current.condition.icon;
    document.querySelector(".content .custom").innerHTML = resalut.current.condition.text;
    document.querySelector(".second-day .icon img").src = resalut.forecast.forecastday[1].hour[0].condition.icon;
    document.querySelector(".temp-second-day .temp-one").innerHTML = resalut.forecast.forecastday[1].day.maxtemp_c + `<sup>o</sup>C`;
    document.querySelector(".temp-second-day .temp-two").innerHTML = resalut.forecast.forecastday[1].day.mintemp_c + `<sup>o</sup>C`;
    document.querySelector(".second-day .custom").innerHTML = resalut.forecast.forecastday[1].hour[0].condition.text ;
    document.querySelector(".third-day .icon img").src = resalut.forecast.forecastday[2].hour[0].condition.icon;
    document.querySelector(".temp-third-day .temp-one").innerHTML = resalut.forecast.forecastday[2].day.maxtemp_c + `<sup>o</sup>C`;
    document.querySelector(".temp-third-day .temp-two").innerHTML = resalut.forecast.forecastday[2].day.mintemp_c + `<sup>o</sup>C`;
    document.querySelector(".third-day .custom").innerHTML = resalut.forecast.forecastday[2].hour[0].condition.text;
}
let input =document.querySelector("#search");
function getDay(){
    input.addEventListener("keyup" , function(){
        var x =  input.value;
        getWeather(x)
    })
}
getDay()


// if (navigator.geolocation) {
//     navigator.geolocation.watchPosition(function(position){
//         console.log(position);
//     },
//     function(error){
//         console.log(error);
//     }
//     )
// }