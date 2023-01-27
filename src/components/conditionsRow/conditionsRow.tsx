type ConditionsRowProps = {
    wind?: number,
    sunrise?: string,
    sunset?: string
    humidity?: number
}

import { 
    Container,
    InternContainer,
    Title,
    SubTitle
} from './styles'

export default function ConditionsRow({wind, sunrise, sunset, humidity}: ConditionsRowProps) {
  return (
    <Container>
        <InternContainer>
            <Title>wind speed</Title>
            <SubTitle>{wind}m/s</SubTitle>
        </InternContainer>
        <InternContainer>
            <Title>sunrise</Title>
            <SubTitle>{sunrise}</SubTitle>
        </InternContainer>
        <InternContainer>
            <Title>sunset</Title>
            <SubTitle>{sunset}</SubTitle>
        </InternContainer>
        <InternContainer>
            <Title>humidity</Title>
            <SubTitle>{humidity}%</SubTitle>
        </InternContainer>
    </Container>
  )
}
