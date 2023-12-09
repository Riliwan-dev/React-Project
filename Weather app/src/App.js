import './App.css';
import React, {useState} from 'react';

const api = {
  key :'5c9b474aa3ef8c212ddd3ae4b066067e',
  base :  "https://api.openweathermap.org/data/2.5/"
}
function App() {
  const [query, setQuery] = useState(''); // Provide an initial value for query
  const [weather, setWeather] = useState({}); // Provide an initial value for weather

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`) // Fix the syntax error here
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
          console.log(result); // Move the console.log inside the block
        });
    }
  };
 
  const dateBuilder = (d) => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"];

    let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // let day = days.d[getDay()];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="app"> 
       <main>
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

                  if (typeof window.main !=== "undefined") ? (
              <div>
              <div className='location-box'>
                  <div className='location'> {weather.main},{weather.sys.country} </div>
                    <div className='date'>{dateBuilder(new Date())}</div>
              </div>

                <div className='weather-box'>
                    <div className='temp'>15°c</div>
                    <div className='weather'>Sunny</div>
                </div>
        </div>
        ) : ('')}
       </main>

    </div>
  );
}

export default App;
