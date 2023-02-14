import { Container, ViewContent } from '../../styles/styles.global'
import { useParams } from 'react-router-dom'

import Header from '../../components/header/header'

import useCities from '../../hooks/useCities'

import ErrorComponent from '../../components/errorComponent/errorComponent'
import LoadingComponent from '../../components/loading/loading'
import CityComponent from '../../components/City/City'

export default function City() {
  const { city } = useParams()
  const { data, error, loading } = useCities(city ? city : '')

  return (
    <Container>
      <ViewContent>
      <Header />
        {
          loading === true ? (
            <LoadingComponent />
          ) : (
            <>
              {
                error !== null ? (
                  <ErrorComponent />
                ) : (
                  <CityComponent
                    city={city ? city : ''}
                    data={data}
                  />
                )
              }
            </>
          )
        }
      </ViewContent>
    </Container>
  )
}
