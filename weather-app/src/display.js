import React from "react";

function Display({ error, data }) {
  if (!data && !error) {
    return <div>Check forecast of any city</div>;
  } else if (!data && error) {
    return <div>Sorry. Please try again later.</div>;
  }

  const { main, wind, weather, name } = data;
  const { temp, humidity } = main;
  const { speed } = wind;
  const weatherDescription = weather[0].description;

  return (
    <>
      {error ? <div className="error">{error}</div> : null}
      <div className="weather">
        <h2>Weather Information</h2>

        <p>
          <strong>Place:</strong> {name}
        </p>
        <p>
          <strong>Temperature:</strong> {temp}°C
        </p>
        <p>
          <strong>Humidity:</strong> {humidity}%
        </p>
        <p>
          <strong>Wind Speed:</strong> {speed} m/s
        </p>
        <p>
          <strong>Description:</strong> {weatherDescription}
        </p>
      </div>
    </>
  );
}

export default Display;
