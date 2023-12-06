import React, {useState} from 'react'; 


const App = () => {

  const [temperatureValue,setTemperatureValue] = useState(45);
  return (
     <div className='app-container'>
      <div className='temperature-display-container'>
        <div className='temperature-display'>{temperatureValue}C</div>
          </div>

            <div className='button-container'>
              <button onClick={() => {}}>+</button>
                <button>-</button>
                  </div>
       </div> 
  );
 
}
 
export default App;

