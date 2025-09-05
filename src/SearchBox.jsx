import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'

export default function SearchBox({updateInfo}){
    const [City, setCity] = useState("");
    const [error, setError] = useState(false);
    let City_url = "https://api.openweathermap.org/data/2.5/weather";
    let city_key = "032dddc96245a9809bd58c3e738d966d"
    
    
    let changeCity = (event)=>{
        setCity(event.target.value)
    }

    let getWeatherInfo = async () =>{
        try{
            let response = await fetch (`${City_url}?q=${City}&appid=${city_key}&units=metric`)
            let jsonResponse = await response.json()
        console.log(jsonResponse);
     

        let details = {
            city: City,
            weather : jsonResponse.weather[0].description,
            feels_like : jsonResponse.main.feels_like,
            temparature : jsonResponse.main.temp,
            humidity : jsonResponse.main.humidity,
            pressure : jsonResponse.main.pressure,
            sea_level : jsonResponse.main.sea_level,
            max_temparature : jsonResponse.main.temp_max,
            min_temparature: jsonResponse.main.temp_min
        }
       return details;
        }catch(error){
            throw error;
        }
        
    }
    let preventChanges = async (event) =>{
        try{
            console.log(City);
            event.preventDefault();
            let weatherInfo = await getWeatherInfo();
            updateInfo(weatherInfo);
            setCity("")  
        }catch(error){
            setError(true);
        }
        
    }
    return(
    <div className='SearchBox'>
        <form onSubmit={preventChanges}>
    <>
        <TextField
            id="outlined-basic"
            label="city-name"
            variant="outlined"
            required
            value={City}
            onChange={changeCity}
            sx={{
                "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "white" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                    "& input": { color: "white" }, // text inside white
                },    "& .MuiInputLabel-root": { color: "white" }, // placeholder/label white,
               
            }}
        />
        <br /><br />
        <Button variant="contained" type="submit">Submit</Button> {/*whenever we add an additional button , we add type as submit*/}
    </>
        </form>
         {error && <p style={{color:"red"}}>No such city in our API!</p>}
    </div>
    );
}