const API_KEY="8542ffd9757d3718a1f14736a542bbb6"
const makeIconURL=(iconid)=>`https://openweathermap.org/img/wn/${iconid}@2x.png` 
const Weather_data=async(city,units)=>
{
  
  try{
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    console.log(URL)
    const data = await fetch(URL).then(res => res.json());
    const
    {
      weather,
      main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
      wind: { speed },
      sys: { country },
      name
    } = data;

    const {description, icon } = weather[0];
    return {
      description,
      iconURL:makeIconURL(icon),
      temp,
      feels_like,
      temp_min,
      temp_max,
      pressure,
      humidity,
      speed,
      country,
      name
    };
  }
  catch(Exception)
  {
    console.log(Exception)
  }

}
export{Weather_data}