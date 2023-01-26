import { Container, Title, ViewContent } from '../../styles/styles.global'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Service from '../../services/service'

import { RequestData } from '../../interfaces/RequestData'

export default function City() {
  const [requestData, setRequestData] = useState<RequestData>({})
  const [error, setError] = useState(false)
  const { city } = useParams()

  useEffect(() => {
   handleGetCityData()
  }, [])
  
  const handleGetCityData = async () => {
    await Service.get(`/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}`)
      .then(response => {
        setRequestData(response.data)
        console.log(response.data)
        
      })
      .catch(() => {
        setError(true);
      }
    )
  }

  return (
    <Container>
      <ViewContent>
        {
          error === false ? (
            <>
              <Title>{requestData.location?.country}</Title>
            </>
          ) : (
            <>
              <Title>erro</Title>
            </>
          )
        }
      </ViewContent>
    </Container>
  )
}
