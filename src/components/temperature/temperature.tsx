import React, { useEffect } from 'react'
import { HiArrowLongUp, HiArrowLongDown } from 'react-icons/hi2'
import { BsCloudRainHeavy } from 'react-icons/bs'
import {
    Container,
    InternContainer,
    SubContainer,
    ActualTemperature,
    TemperatureType,
    MiniTemperatures
} from './styles'
import WeatherIcons from '../weatherIcon/weatherIcon'

type TemperatureParams = {
	actualTemperature?: number,
	minTemperature?: number,
	maxTemperature?: number,
	condition: string
}

export default function Temperature({ actualTemperature, minTemperature, maxTemperature, condition }: TemperatureParams) {
	return (
    <Container data-testid="TemperatureTestId">
			<InternContainer>
				<SubContainer>
					<ActualTemperature data-testid="ActualTemperatureTestId">
						{actualTemperature}
					</ActualTemperature>
				</SubContainer>
				<SubContainer>
					<TemperatureType>ºC</TemperatureType>
					<SubContainer>
						<MiniTemperatures data-testid="MaxTemperatureTestId"><HiArrowLongUp size={15} color='#F2F2F2'/>{maxTemperature}º</MiniTemperatures>
						<MiniTemperatures data-testid="MinTemperatureTestId"><HiArrowLongDown size={15} color='#F2F2F2'/>{minTemperature}º</MiniTemperatures>
					</SubContainer>
				</SubContainer>
			</InternContainer>
			<InternContainer>
				<WeatherIcons weather={condition}/>	
			</InternContainer>
    </Container>
  )
}
