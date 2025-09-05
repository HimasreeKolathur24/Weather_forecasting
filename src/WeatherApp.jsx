import {useState} from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import './weatherApp.css'
export default function WeatherApp(){
    const [Weather, setWeather] = useState({
        city: "Delhi",
        feels_like : 31,
        humidity : 69,
        max_temparature : 31.93,
        min_temparature : 30,
        pressure : 1005,
        sea_level: 1005,
        temparature: 31.93,
        weather : "cloudy"
    });

    let UpdateInfo = (result) =>{
        console.log(result);
        setWeather(result);
    }

    return(<div className="weatherApp">
        <h2>Weather App</h2>
        <SearchBox updateInfo={UpdateInfo}/>
        <InfoBox weatherInfo={Weather}/>
    </div>);
}