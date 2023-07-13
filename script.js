getdata = function(url){
    $.get(url,function(data){
        var temp = Math.round(data.main.temp) + " °C";
        $("#errormsg").hide();
        $("#temp2").text(temp);
        $("#cityName").text(data.name);
        $("#humidityper").text(data.main.humidity+ " %");
        $("#windSpeed").text(Math.round(data.wind.speed) + " km/h");


        if(data.weather[0].main == "Clouds"){
            $("#weatherImage").attr('src',"clouds.png");
        }
        else if(data.weather[0].main == "Clear"){
            $("#weatherImage").attr('src',"clear.png");
        }
        else if(data.weather[0].main == "Rain"){
            $("#weatherImage").attr('src',"rain.png");
        }
        else if(data.weather[0].main == "Drizzle"){
            $("#weatherImage").attr('src',"drizzle.png");
        }
        else if(data.weather[0].main == "Mist"){
            $("#weatherImage").attr('src',"mist.png");
        }
        localStorage.setItem('city',data.name);
    }).fail(function(xhr,textStatus,errorThrown){
        $("#errormsg").show();
    });
}
$(document).ready(function(){
    var city = localStorage.getItem('city');
        var url = "https://api.openweathermap.org/data/2.5/weather?q="+city+",200&appid=fac1c1531be2fdce51a7a2f78ba778fb&units=metric";
        
        getdata(url);

    
    $("#searchBox").click(function(){
        var city = $("#inputCity").val();
        if(!($.trim(city).length === 0)){
            var url = "https://api.openweathermap.org/data/2.5/weather?q="+city+",200&appid=fac1c1531be2fdce51a7a2f78ba778fb&units=metric";
            
            getdata(url);
        }
        
    });

    $(document).on('keydown',function(){
        console.log("enter clicked");
        var city = $("#inputCity").val();
        if(event.key === "Enter"){
        if(!($.trim(city).length === 0)){
            var url = "https://api.openweathermap.org/data/2.5/weather?q="+city+",200&appid=fac1c1531be2fdce51a7a2f78ba778fb&units=metric";
            console.log("enter k ander");
            getdata(url);
        }}
    });
});




