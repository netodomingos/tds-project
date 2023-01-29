import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Header from '../components/header/header';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Header Tests', async () => {
  it('should render the Header Component', () => {
    render(
        <Router>
            <Header/>
        </Router>
    )

    expect(screen.getByTestId('HeaderTestId')).toBeTruthy()
  })

  it('should render the Header Component with Icon', () => {
    render(
        <Router>
            <Header/>
        </Router>
    )

    expect(screen.getByTestId('HeaderIconTestId')).toBeTruthy()
  })
})
