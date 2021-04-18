var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    var country=JSON.parse(this.response);
    for(var i in country){
        try{
            var cname=country[i].name;
            var latlong=country[i].latlng;
            if(latlong==0)throw new Error("Lat n Lat not found");
            weatherdata(cname,...latlong);
        }
            
            catch(e)
        {
            console.log("inv cord"+cname);

        }
    }
}
var weatherdata=function(name,lat,lng)
{
    var URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8de305d2098c43fa4ce3a88e6c72bf76`;
    var request=new XMLHttpRequest();
    request.open('GET',URL,true);
    request.send();
    request.onload=function(){
        var data=JSON.parse(this.response);
        console.log(`${name}:${data.main.temp}`);
    }
}
