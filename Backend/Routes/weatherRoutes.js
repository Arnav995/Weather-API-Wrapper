import express from "express"
import {getCurrentWeather} from "../controller/weatherController.js"
// this small {} fixed a whole site breaking bug 
// and this we learned "named export must be imported as "import {something} from "" "   "
// we can't just mix named and default exports

const weatherRouter = express.Router();


// sending basic weather get request
weatherRouter.get("/current",getCurrentWeather);

export default weatherRouter