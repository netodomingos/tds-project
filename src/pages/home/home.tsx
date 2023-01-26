import { 
  Container,
  ViewContent,
  Title,
  SubTitle,
  Separator,
  RowContent,
  City
} from "./../../styles/styles.global";

import { IoEarthOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function Home() {

  const cities = [
    {
      name: 'Dallol',
      latitude: 1,
      longitude: 1
    },
    {
      name: 'Fairbanks',
      latitude: 1,
      longitude: 1
    },
    {
      name: 'Londres',
      latitude: 1,
      longitude: 1
    },
    {
      name: 'Recife',
      latitude: 1,
      longitude: 1
    },
    {
      name: 'Vancouver',
      latitude: 1,
      longitude: 1
    },
    {
      name: 'Yakutsk',
      latitude: 1,
      longitude: 1
    },
  ]

  return (
    <Container>
      <ViewContent>
        <Title>WEATHER</Title>
        <SubTitle>select a city</SubTitle>
        <Separator/>
        <IoEarthOutline color="#FFF" size={100} />
        <Separator/>
        <RowContent>
          {
            cities.map(city => (
              <Link 
                style={{
                  textDecoration: 'none'
                }}
                to={{ pathname: `/${city.name}`}}
              >
                <City>{city.name}</City>
              </Link>
            ))
          }
        </RowContent>
      </ViewContent>
    </Container>
  )
}
