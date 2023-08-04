import './App.css'
import { Weather_data } from './weather';
import { FaArrowUp, FaArrowDown,FaSmileWink,FaWind } from 'react-icons/fa';
import{BiHappy}from "react-icons/bi"
import {MdCompress,MdOutlineWaterDrop} from "react-icons/md"
import {useState,useEffect} from "react"
import hotBg from './hotBg.jpg';
import coldBg from './coldBg.jpg';
function App() {
  const[city,setCity]=useState('madurai')
  const[weather,setWeather]=useState(null)
  const[units,setUnits]=useState("metric")

  useEffect(
    () => {
    const fetch_data=async()=>
    {
      try{
      const data=await Weather_data(city,units);
    
   
      setWeather(data)
   
      const threshold=units=== 'metric'?20:60;
      
      if (data.temp <= threshold) 
      {
        
        document.body.style.backgroundImage =  `url(${coldBg})`;;
      } else if(units==='metric' ){
       
        document.body.style.backgroundImage =  `url(${hotBg})`;;
      }
    }catch(Exception){setCity("madurai")}
    }
    fetch_data();
  }, [units,city])
  
  const handleClick = (e) => {
    const button = e.currentTarget;
    const isCelsius = button.innerText === "Celsius";
    button.innerText = isCelsius ? "Fahrenheit" : "Celsius";
    setUnits(isCelsius ? "metric" : "imperial");
  };
const enterKeyPress=(e)=>
{
  if(e.keyCode===13)
  {
    setCity(e.currentTarget.value)
    e.currentTarget.blur();
  }

}
return (
    <div className="App">
       {weather && (
      <div className="input">
    
        <input type="text" placeholder="Enter The City...." onKeyDown={enterKeyPress}></input>
        <button onClick={(e) => handleClick(e, "buttonId")}>Fahrenheit</button>
      
      </div> )}
      {weather && (
      <div className="second">
        <div className="cloud">
          <h1>{`${weather.name},${weather.country}`}</h1>
          <img src={weather.iconURL}></img>
          <h3>{weather.description}</h3>
          </div>
       
          <div className="temp">
            <h2>{`${weather.temp.toFixed()}${units==='metric' ? "°C" :"°F"}`}</h2>

          </div>
         
      
       </div>
        )}
          {weather && (
       <div className="footer">
          <div className="min">
            < FaArrowUp/>
            <h3>Min</h3>
              <h2>{weather.temp_min}</h2>
          </div>
          <div  className="max">
          < FaArrowDown/>
          <h3>Max</h3>
              <h2>{weather.temp_max}</h2>
            
          </div>
          <div  className="feelslike">
         
            <BiHappy/>
            <h3>Feels_Like</h3>
          <h3>{weather.Feels_Like}</h3>
              <h2>35°C</h2>
            
          </div>
          <div  className="pressure">
            <MdCompress/>
          <h3>Pressure</h3>
              <h2>{weather.pressure}hpa</h2>
            
          </div>
          <div  className="humidity">
          <MdOutlineWaterDrop/>
          <h3>Humidity</h3>
              <h2>{weather.humidity}%</h2>
            
          </div>
          <div  className="wind">
            <FaWind/>
          <h3>Wind</h3>
              <h2>{weather.speed}m/s</h2>
            
          </div>

       </div>
)}

      </div>
      
  
  );
}

export default App;
