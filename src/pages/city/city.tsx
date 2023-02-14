import { Container, SubTitle, Title, ViewContent } from '../../styles/styles.global'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Header from '../../components/header/header'
import Temperature from '../../components/temperature/temperature'
import TemperatureRow from '../../components/temperatureRow/temperatureRow'
import ConditionsRow from '../../components/conditionsRow/conditionsRow'

import { hourData } from '../../interfaces/RequestData'
import useCities from '../../hooks/useCities'
import ErrorComponent from '../../components/errorComponent/errorComponent'

export default function City() {
  const [tempRow, setTempRow] = useState<Array<hourData>>([])
  const { city } = useParams()
  const { data, error, loading } = useCities(city ? city : '')

  useEffect(() => {
    if(data.forecast?.forecastday[0].hour[3].temp_c !== undefined){
      const Dawn = { temp_c: data.forecast?.forecastday[0].hour[3].temp_c, condition: data.forecast?.forecastday[0].hour[3].condition, title: 'dawn' }
      const Morning = { temp_c: data.forecast?.forecastday[0].hour[9].temp_c, condition: data.forecast?.forecastday[0].hour[9].condition, title: 'morning' }
      const Afternoon = { temp_c: data.forecast?.forecastday[0].hour[15].temp_c, condition: data.forecast?.forecastday[0].hour[15].condition, title: 'afternoon' }
      const Night = { temp_c: data.forecast?.forecastday[0].hour[21].temp_c, condition: data.forecast?.forecastday[0].hour[21].condition, title: 'night' } 

      setTempRow([Dawn, Morning, Afternoon, Night])
    }
  }, [data.forecast])

  return (
    <Container>
      <ViewContent>
      <Header />
        {
          loading === true ? (
            <SubTitle>Loading...</SubTitle>
          ) : (
            <>
              {
                error !== null ? (
                  <ErrorComponent />
                ) : (
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
            </>
          )
        }
      </ViewContent>
    </Container>
  )
}
