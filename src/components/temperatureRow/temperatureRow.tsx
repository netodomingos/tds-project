import { hourData } from "../../interfaces/RequestData"
import WeatherIcons from "../weatherIcon/weatherIcon"
import { 
	Container,
	InterContainer,
	Title,
	TemperatureText
} from "./styles"

type TemperatureRowProps = {
    temperatureRows: Array<hourData>
}

export default function TemperatureRow({ temperatureRows }: TemperatureRowProps) {
  return (
    <Container>
        {
          temperatureRows.map(temperature => (
						<InterContainer>
							<Title>
								{temperature.title}
							</Title>
							<WeatherIcons weather={temperature.condition.text} size={40}/>
							<TemperatureText>
								{temperature.temp_c} ºC
							</TemperatureText>
						</InterContainer>
					))
        }
    </Container>
  )
}
