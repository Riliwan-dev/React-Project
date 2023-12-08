import './App.css';
const api = {
  key :'5c9b474aa3ef8c212ddd3ae4b066067e',
  base :  "https://api.openweathermap.org/data/2.5/"
}

function App() {
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
                  >
                </input>
           </div>

           <div className='location-box'>
            <div className='location'>New York City Us </div>
            <div className='date'>{dateBuilder(new Date())}</div>
           </div>

           <div className='weather-app'>
            
           </div>
       </main>

    </div>
  );
}

export default App;
