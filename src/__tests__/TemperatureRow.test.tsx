import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import TemperatureRow from '../components/temperatureRow/temperatureRow';
import { hourData } from '../interfaces/RequestData';

const MOCK: Array<hourData> = [
    {
        condition: { text: 'Clear', code: 1, icon: 'Clear' },
        temp_c: 10,
        title: 'TemperatureRowTestID'
    }
]

describe('Temperature Row Component Tests', async () => {
    it('should render the temperature Row Component with id test', () => {
        render(<TemperatureRow temperatureRows={MOCK} />)

        expect(screen.getByTestId('TemperatureRowTestID')).toBeTruthy()
    })

    it('should render the temperature Row Component with temp title', () => {
        render(<TemperatureRow temperatureRows={MOCK} />)

        expect(screen.getByText('TemperatureRowTestID')).toBeTruthy()
    })
    it('should render the temperature Row Component with temp celcius', () => {
        render(<TemperatureRow temperatureRows={MOCK} />)

        expect(screen.getByTestId('10')).toBeTruthy()
    })
})
