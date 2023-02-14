import React, { useEffect, useState } from 'react'
import { hourData, Response } from '../../interfaces/RequestData'

import Temperature from '../../components/temperature/temperature'
import TemperatureRow from '../../components/temperatureRow/temperatureRow'
import ConditionsRow from '../../components/conditionsRow/conditionsRow'
import { SubTitle, Title } from '../../styles/styles.global'

type CityProps = {
	data: Response,
	city: string
}

export default function CityComponent({ data, city }: CityProps) {
	const [tempRow, setTempRow] = useState<Array<hourData>>([])
	
	useEffect(() => {
    handleSetTempRow()
  }, [data.forecast]) 

	function handleSetTempRow(){
		if(data.forecast?.forecastday[0].hour[3].temp_c !== undefined){
			const Dawn = { temp_c: data.forecast?.forecastday[0].hour[3].temp_c, condition: data.forecast?.forecastday[0].hour[3].condition, title: 'dawn' }
			const Morning = { temp_c: data.forecast?.forecastday[0].hour[9].temp_c, condition: data.forecast?.forecastday[0].hour[9].condition, title: 'morning' }
			const Afternoon = { temp_c: data.forecast?.forecastday[0].hour[15].temp_c, condition: data.forecast?.forecastday[0].hour[15].condition, title: 'afternoon' }
			const Night = { temp_c: data.forecast?.forecastday[0].hour[21].temp_c, condition: data.forecast?.forecastday[0].hour[21].condition, title: 'night' } 

			setTempRow([Dawn, Morning, Afternoon, Night])
		}
	}

  return (
   <>
	 	<Title>{city}</Title>
		<SubTitle>{data.current?.condition.text}</SubTitle>
		<Temperature 
			actualTemperature={data.current?.temp_c}
			minTemperature={data.forecast?.forecastday[0].day?.mintemp_c}
			maxTemperature={data.forecast?.forecastday[0].day.maxtemp_c}
			condition={data.current?.condition.text ? data.current?.condition.text : 'Sunny'}
		/>
		<TemperatureRow 
			temperatureRows={tempRow}
		/>
		<ConditionsRow 
			humidity={data.current?.humidity}
			wind={data.current?.wind_mph}
			sunrise={data.forecast?.forecastday[0].astro.sunrise}
			sunset={data.forecast?.forecastday[0].astro.sunset}
		/>
	 </>
  )
}
