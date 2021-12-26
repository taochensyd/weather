import './App.css';

function App() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Latitude is :" + position.coords.latitude + " " + "Longitude is :" + position.coords.longitude);

    });

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position)
    });
  } else {
    console.log("Not Available");
  }

  

  return (
    <div>app.js</div>
  );
}

export default App;
