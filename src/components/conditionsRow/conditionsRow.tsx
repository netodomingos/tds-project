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
    <Container data-testid={'ConditionsRowTestId'}>
        <InternContainer>
            <Title>wind speed</Title>
            <SubTitle data-testid={wind}>{wind}m/s</SubTitle>
        </InternContainer>
        <InternContainer>
            <Title>sunrise</Title>
            <SubTitle data-testid={sunrise} >{sunrise}</SubTitle>
        </InternContainer>
        <InternContainer>
            <Title>sunset</Title>
            <SubTitle data-testid={sunset}>{sunset}</SubTitle>
        </InternContainer>
        <InternContainer>
            <Title>humidity</Title>
            <SubTitle data-testid={humidity}>{humidity}%</SubTitle>
        </InternContainer>
    </Container>
  )
}
