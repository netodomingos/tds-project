import { useEffect } from 'react'
import { 
	BsSun, 
	BsClouds, 
	BsCloudSnow, 
	BsCloudRain, 
	BsCloudRainHeavy, 
	BsCloudDrizzle, 
	BsCloudLightning, 
	BsCloudLightningRain,
	BsSnow,
	BsCloudFog,
	BsCloud,
	BsMoon
} from 'react-icons/bs'

type WeatherConditionsProps = {
	weather: string
}

export default function WeatherIcons({weather}: WeatherConditionsProps) {
  const Conditions = [
	{
		"code" : 1000,
		"day" : "Sunny",
		"night" : "Clear",
		"icon" : <BsSun size={80} color='#FFF'/>,
		"icon_night": <BsMoon size={80} color='#FFF'/> 
	},
	{
		"code" : 1003,
		"day" : "Partly cloudy",
		"night" : "Partly cloudy",
		"icon" : <BsCloud size={80} color='#FFF'/>
	},
	{
		"code" : 1006,
		"day" : "Cloudy",
		"night" : "Cloudy",
		"icon" : <BsClouds size={80} color='#FFF'/>
	},
	{
		"code" : 1009,
		"day" : "Overcast",
		"night" : "Overcast",
		"icon" : <BsClouds size={80} color='#FFF'/>
	},
	{
		"code" : 1030,
		"day" : "Mist",
		"night" : "Mist",
		"icon" : <BsClouds size={80} color='#FFF'/>
	},
	{
		"code" : 1063,
		"day" : "Patchy rain possible",
		"night" : "Patchy rain possible",
		"icon" : <BsCloudRain size={80} color='#FFF'/>
	},
	{
		"code" : 1066,
		"day" : "Patchy snow possible",
		"night" : "Patchy snow possible",
		"icon" : <BsCloudSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1069,
		"day" : "Patchy sleet possible",
		"night" : "Patchy sleet possible",
		"icon" : <BsCloudSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1072,
		"day" : "Patchy freezing drizzle possible",
		"night" : "Patchy freezing drizzle possible",
		"icon" : <BsCloudDrizzle size={80} color='#FFF'/>
	},
	{
		"code" : 1087,
		"day" : "Thundery outbreaks possible",
		"night" : "Thundery outbreaks possible",
		"icon" : <BsCloudLightning size={80} color='#FFF'/>
	},
	{
		"code" : 1114,
		"day" : "Blowing snow",
		"night" : "Blowing snow",
		"icon" : <BsCloudSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1117,
		"day" : "Blizzard",
		"night" : "Blizzard",
		"icon" : <BsSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1135,
		"day" : "Fog",
		"night" : "Fog",
		"icon" : <BsCloudFog size={80} color='#FFF'/>
	},
	{
		"code" : 1147,
		"day" : "Freezing fog",
		"night" : "Freezing fog",
		"icon" : <BsCloudFog size={80} color='#FFF'/>
	},
	{
		"code" : 1150,
		"day" : "Patchy light drizzle",
		"night" : "Patchy light drizzle",
		"icon" : <BsCloudDrizzle size={80} color='#FFF'/>
	},
	{
		"code" : 1153,
		"day" : "Light drizzle",
		"night" : "Light drizzle",
		"icon" : <BsCloudDrizzle size={80} color='#FFF'/>
	},
	{
		"code" : 1168,
		"day" : "Freezing drizzle",
		"night" : "Freezing drizzle",
		"icon" : <BsCloudDrizzle size={80} color='#FFF'/>
	},
	{
		"code" : 1171,
		"day" : "Heavy freezing drizzle",
		"night" : "Heavy freezing drizzle",
		"icon" : <BsCloudDrizzle size={80} color='#FFF'/>
	},
	{
		"code" : 1180,
		"day" : "Patchy light rain",
		"night" : "Patchy light rain",
		"icon" : <BsCloudRain size={80} color='#FFF'/>
	},
	{
		"code" : 1183,
		"day" : "Light rain",
		"night" : "Light rain",
		"icon" : <BsCloudRain size={80} color='#FFF'/>
	},
	{
		"code" : 1186,
		"day" : "Moderate rain at times",
		"night" : "Moderate rain at times",
		"icon" : <BsCloudRain size={80} color='#FFF'/>
	},
	{
		"code" : 1189,
		"day" : "Moderate rain",
		"night" : "Moderate rain",
		"icon" : <BsCloudRain size={80} color='#FFF'/>
	},
	{
		"code" : 1192,
		"day" : "Heavy rain at times",
		"night" : "Heavy rain at times",
		"icon" : <BsCloudRainHeavy size={80} color='#FFF'/>
	},
	{
		"code" : 1195,
		"day" : "Heavy rain",
		"night" : "Heavy rain",
		"icon" : <BsCloudRainHeavy size={80} color='#FFF'/>
	},
	{
		"code" : 1198,
		"day" : "Light freezing rain",
		"night" : "Light freezing rain",
		"icon" : <BsCloudRain size={80} color='#FFF'/>
	},
	{
		"code" : 1201,
		"day" : "Moderate or heavy freezing rain",
		"night" : "Moderate or heavy freezing rain",
		"icon" : <BsCloudRain size={80} color='#FFF'/>
	},
	{
		"code" : 1204,
		"day" : "Light sleet",
		"night" : "Light sleet",
		"icon" : <BsCloudSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1207,
		"day" : "Moderate or heavy sleet",
		"night" : "Moderate or heavy sleet",
		"icon" : <BsCloudSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1210,
		"day" : "Patchy light snow",
		"night" : "Patchy light snow",
		"icon" : <BsCloudSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1213,
		"day" : "Light snow",
		"night" : "Light snow",
		"icon" : <BsCloudSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1216,
		"day" : "Patchy moderate snow",
		"night" : "Patchy moderate snow",
		"icon" : <BsCloudSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1219,
		"day" : "Moderate snow",
		"night" : "Moderate snow",
		"icon" : <BsCloudSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1222,
		"day" : "Patchy heavy snow",
		"night" : "Patchy heavy snow",
		"icon" : <BsCloudSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1225,
		"day" : "Heavy snow",
		"night" : "Heavy snow",
		"icon" : <BsCloudSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1237,
		"day" : "Ice pellets",
		"night" : "Ice pellets",
		"icon" : <BsCloudSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1240,
		"day" : "Light rain shower",
		"night" : "Light rain shower",
		"icon" : <BsCloudRain size={80} color='#FFF'/>
	},
	{
		"code" : 1243,
		"day" : "Moderate or heavy rain shower",
		"night" : "Moderate or heavy rain shower",
		"icon" : <BsCloudRain size={80} color='#FFF'/>
	},
	{
		"code" : 1246,
		"day" : "Torrential rain shower",
		"night" : "Torrential rain shower",
		"icon" : <BsCloudRain size={80} color='#FFF'/>
	},
	{
		"code" : 1249,
		"day" : "Light sleet showers",
		"night" : "Light sleet showers",
		"icon" : <BsCloudSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1252,
		"day" : "Moderate or heavy sleet showers",
		"night" : "Moderate or heavy sleet showers",
		"icon" : <BsCloudSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1255,
		"day" : "Light snow showers",
		"night" : "Light snow showers",
		"icon" : <BsCloudSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1258,
		"day" : "Moderate or heavy snow showers",
		"night" : "Moderate or heavy snow showers",
		"icon" : <BsSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1261,
		"day" : "Light showers of ice pellets",
		"night" : "Light showers of ice pellets",
		"icon" : <BsSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1264,
		"day" : "Moderate or heavy showers of ice pellets",
		"night" : "Moderate or heavy showers of ice pellets",
		"icon" : <BsSnow size={80} color='#FFF'/>
	},
	{
		"code" : 1273,
		"day" : "Patchy light rain with thunder",
		"night" : "Patchy light rain with thunder",
		"icon" : <BsCloudLightningRain size={80} color='#FFF'/>
	},
	{
		"code" : 1276,
		"day" : "Moderate or heavy rain with thunder",
		"night" : "Moderate or heavy rain with thunder",
		"icon" : <BsCloudLightningRain size={80} color='#FFF'/>
	},
	{
		"code" : 1279,
		"day" : "Patchy light snow with thunder",
		"night" : "Patchy light snow with thunder",
		"icon" : <BsCloudLightningRain size={80} color='#FFF'/>
	},
	{
		"code" : 1282,
		"day" : "Moderate or heavy snow with thunder",
		"night" : "Moderate or heavy snow with thunder",
		"icon" : <BsCloudLightningRain size={80} color='#FFF'/>
	}
  ]

	function handleGetIcon(){
		if(weather){
			const Component = Conditions.filter(condition => condition.day === weather || condition.night === weather)
			if(Component[0].code === 1000 && weather === 'Clear'){
				return Component[0].icon_night
			} else {
				return Component[0].icon
			}
		}
	}

	return (<>{handleGetIcon()}</>)
}
