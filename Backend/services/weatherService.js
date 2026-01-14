import axios from "axios"

// very important to load up dotenv here in weatherService, we wanna process the API Key
import dotenv from "dotenv"
dotenv.config()


const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = process.env.WEATHER_API_KEY;


export const fetchCurrentWeather = async(city)=>{
     try {
          const response = await axios.get(`${BASE_URL}/weather`,{
               params:{
                    q:city,
                    appid:API_KEY,
                    units:"metric"
               }
          });
          return response.data;

     } catch (error) {
          throw new Error("Failed to fetch Weather data");
     }

}
//export default fetchCurrentWeather;