import { fetchCurrentWeather } from "../services/weatherService.js"

//fetchCurrentWeather is calling the service function... doesnt call the api directly

export const getCurrentWeather = async(req,res)=>{
     const {city} = req.query;

     // if user input is wrong city
     // a good backend never trusts the user to be correct
     if(!city){
          return res.status(400).json({
               error:"City is Required"
          });
     }
     try {
          const data = await fetchCurrentWeather(city);
          res.json(data);
     } catch (error) {
          res.status(500).json({
               error:error.message
          })
     }
}
