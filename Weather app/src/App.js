// Import necessary modules and styles
import './App.css';
import React, { useState } from 'react'; 

// Define the OpenWeatherMap API key and base URL
const api = {
  key: '5c9b474aa3ef8c212ddd3ae4b066067e',
  base: "https://api.openweathermap.org/data/2.5/"
}

// Define the main App component
function App() {
  // State variables for user input (query) and weather data (weather)
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  // Function to handle user input and trigger API call on 'Enter' key press
  const search = (evt) => {
    if (evt.key === 'Enter') {
      // Fetch weather data from the OpenWeatherMap API
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          // Update the weather state with the fetched data and reset the query
          setWeather(result);
          setQuery('');
          console.log(result); // Log the result to the console
        });
    }
  };

  // Function to format and build the date string
  const dateBuilder = (d) => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[d.getDay()]; // Get the current day of the week
    let date = d.getDate(); // Get the current day of the month
    let month = months[d.getMonth()]; // Get the current month
    let year = d.getFullYear(); // Get the current year

    return `${day} ${date} ${month} ${year}`; // Return the formatted date string
  };

  // JSX structure for the main component
  return (
    // <div className={classnames('app', { 'warm': typeof weather.main !== 'undefined' && weather.main > 16 })}>
       <div className={(typeof weather.main !== "undefined") ? ((weather.main > 16) ? "app warm" : "app") : "app"}>  
        <main>
        {/* Search box for user input */}
        <div className='search-box'>
          <input
            type='text'
            className='search-bar'
            placeholder='Search....'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {/* Display weather information if it exists */}
        {weather.main && (
          <div>
            {/* Location and date information */}
            <div className='location-box'>
              <div className='location'>{weather.name}, {weather.sys?.country}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>

            {/* Weather information */}
            <div className='weather-box'>
              <div className='temp'>
                {Math.round(weather.main.temp)}°C
              </div>
              <div className='weather'>{weather.weather[0]?.main}</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Export the App component as the default export
export default App;
