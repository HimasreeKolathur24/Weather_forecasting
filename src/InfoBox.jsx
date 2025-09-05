import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({weatherInfo}){
    let img_url = "https://images.unsplash.com/photo-1596917271790-a399eb805dce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let hotimg_url = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let rainyimg_url = "https://media.istockphoto.com/id/140453995/photo/road-with-cars-in-stormy-weather-people-running.jpg?s=612x612&w=0&k=20&c=V6MZ6LWxs6B7Yj5csCNXSTTdgiwZNckkfE3A-IH14Fk="
    let coldimg_url = "https://media.istockphoto.com/id/1289449088/photo/branches-covered-with-ice-after-freezing-rain-sparkling-ice-covered-everything-after-ice.webp?b=1&s=612x612&w=0&k=20&c=UVenbk8l21t5Wro8huAzkPi7VpGAF1QsTl-H9jPg4sA="
    return(
    <div >
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={weatherInfo.humidity >= 80 ? rainyimg_url : weatherInfo.temparature > 27? hotimg_url : coldimg_url }
        title="green iguana"
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
          {weatherInfo.city} {weatherInfo.humidity >= 80 ? <ThunderstormIcon/> : weatherInfo.temparature > 27? <SunnyIcon/> :<AcUnitIcon/> }
        </Typography> */}

          
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temparature = {weatherInfo.temparature}&deg;C</p>
          <p>Humidity={weatherInfo.humidity}</p>
          <p>Min temp = {weatherInfo.min_temparature}</p>
          <p>Max temp = {weatherInfo.max_temparature}</p>
          <p>The weather can be described as {weatherInfo.weather} and  feels like {weatherInfo.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    );
}