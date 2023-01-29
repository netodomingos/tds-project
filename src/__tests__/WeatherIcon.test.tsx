import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import WeatherIcons from '../components/weatherIcon/weatherIcon';

describe('Weather Icons Tests', async () => {
  it('should render the correct icon for Sunny', () => {
    render(<WeatherIcons weather="Sunny" />)

    expect(screen.getByTestId('Sunny')).toBeTruthy()
  })
    it('should render the correct icon for Clear', () => {
    render(<WeatherIcons weather="Clear" />);

    expect(screen.getByTestId('Clear')).toBeTruthy()
  });

  it('should render the correct icon for Partly cloudy', () => {
    render(<WeatherIcons weather="Partly cloudy" />);

    expect(screen.getByTestId('Partly cloudy')).toBeTruthy()
  });

  it('should render the correct icon for Cloudy', () => {
    render(<WeatherIcons weather="Cloudy" />);

    expect(screen.getByTestId('Cloudy')).toBeTruthy()
  });

  it('should render the correct icon for Overcast', () => {
    render(<WeatherIcons weather="Overcast" />);

    expect(screen.getByTestId('Overcast')).toBeTruthy()
  });
})
