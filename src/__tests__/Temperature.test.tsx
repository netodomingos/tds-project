import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Temperature from '../components/temperature/temperature';

const MOCK = {
	actualTemperature: 10,
	minTemperature: 9,
	maxTemperaturr: 20,
	condition: 'Clear'
}

describe('Temperature Tests', async () => {
  it('should render the Temperature Component', () => {
    render(<Temperature condition={MOCK.condition} />)

    expect(screen.getByTestId('TemperatureTestId')).toBeTruthy()
  })
  it('should render the Temperature Component with Actual Temperature', () => {
    render(<Temperature condition={MOCK.condition} actualTemperature={MOCK.actualTemperature} />)

    expect(screen.getByTestId('ActualTemperatureTestId')).toBeTruthy()
  })
  it('should render the Temperature Component with Min Temperature', () => {
    render(<Temperature condition={MOCK.condition} minTemperature={MOCK.minTemperature} />)

    expect(screen.getByTestId('MinTemperatureTestId')).toBeTruthy()
  })
  it('should render the Temperature Component with Max Temperature', () => {
    render(<Temperature condition={MOCK.condition} maxTemperature={MOCK.maxTemperaturr} />)

    expect(screen.getByTestId('MaxTemperatureTestId')).toBeTruthy()
  })
})
