locationsArray = [
    {
    Name: 'Horizons west',
    latitude:40.356160529115385, 
    longitude:-94.88138729164642,
    Notes: 'circle',
    Attachments: '',
    'Quest-Location': 'Horizons west'
},
    {
        Name: 'Colden Hall',
        latitude:40.35112431021874, 
        longitude:-94.8824199980626,
        Notes: 'circle',
        Attachments: '',
        'Quest-Location': 'Colden Hall'
      },  
  {
        Name: 'Bearcat Stadium',
        latitude:40.35091480759317, 
        longitude:-94.88591878401455,
        Notes: 'circle',
        Attachments: '',
        'Quest-Location': 'Bearcat Stadium'
      }
];
  

function checkLocation(){
    
    for (let i=0;i<locationsArray.length;i++){
        const checkLocation = locationsArray[i];
        console.log(locationsArray[i]);
        const checkLatitude =checkLocation.latitude;
        console.log("Latitude of the destination"+checkLatitude);
        const checkLongitude =checkLocation.longitude;
        console.log("Longitude of the destination"+checkLongitude);
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            console.log("Latitude of the source"+latitude);
            const longitude = position.coords.longitude;
            console.log("Longitude of the source"+longitude);
        
        const R = 6371; // Radius of the earth in km
        const dLat = toRad( checkLatitude- latitude); // toRad below
        const dLon = toRad(checkLongitude - longitude);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(latitude)) * Math.cos(toRad(checkLatitude)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = (R * c)*1000; // Distance in meters
        // return d;
        console.log("The distance between the source and destination is "+d);
        if(d<=35){
            document.getElementById("loc").innerHTML = "You have reached the location.";
            
        }
        else{
            document.getElementById("loc").innerHTML = "You have not yet reached the location.";
        }
    });
    }


};

function toRad(Value) {
    /** Converts numeric degrees to radians */
    return Value * Math.PI / 180;
}

