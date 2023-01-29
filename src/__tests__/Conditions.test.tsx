import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Conditions from '../components/conditionsRow/conditionsRow';

const MOCK = {
    wind: 1,
    sunrise: 'sunrise content',
    sunset: 'sunset content',
    humidity: 10
    
}

describe('Conditions Tests', async () => {
  it('should render the Conditions Component', () => {
    render(<Conditions />)

    expect(screen.getByTestId('ConditionsRowTestId')).toBeTruthy()
  })
  it('should render the Conditions Component with sunrise', () => {
    render(<Conditions sunrise={MOCK.sunrise} />)

    expect(screen.getByText('sunrise content')).toBeTruthy()
  })
  it('should render the Conditions Component with sunset', () => {
    render(<Conditions sunset={MOCK.sunset} />)

    expect(screen.getByText('sunset content')).toBeTruthy()
  })
  it('should render the Conditions Component with wind', () => {
    render(<Conditions wind={MOCK.wind} />)

    expect(screen.getByTestId(MOCK.wind)).toBeTruthy()
  })
  it('should render the Conditions Component with humidity', () => {
    render(<Conditions humidity={MOCK.humidity} />)

    expect(screen.getByTestId(MOCK.humidity)).toBeTruthy()
  })
})
