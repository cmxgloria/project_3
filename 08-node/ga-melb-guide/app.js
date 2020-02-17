const results = [
  {
    name: "Melbourne Cricket Grounds",
    location: { lat: -37.819967, long: 144.983449 }
  },
  { name: "Flagstaff Gardens", location: { lat: -37.81068, long: 144.954352 } },
  {
    name: "Emporium Melbourne",
    location: { lat: -37.812433, long: 144.963787 }
  },
  { name: "City Library", location: { lat: -37.817039, long: 144.965983 } },
  {
    name: "Southern Cross Station",
    location: { lat: -37.818281, long: 144.952776 }
  },
  {
    name: "Sea Life Melbourne Aquarium",
    location: { lat: -37.82064, long: 144.958325 }
  }
];
// callback=GetMap from script in html
function GetMap() {
  console.log("khkh");
  // map id from div
  var map = new Microsoft.Maps.Map("#map", {
    center: new Microsoft.Maps.Location(-37.818555, 144.959076),
    zoom: 17
  });

  function addPin(result) {
    //Create custom Pushpin
    var pin = new Microsoft.Maps.Pushpin(
      { latitude: result.location.lat, longitude: result.location.long },
      {
        title: result.name,
        subTitle: "SEI",
        text: "1"
      }
    );
    //Add the pushpin to the map
    map.entities.push(pin);
  }
  // run
  results.forEach(addPin);
}
