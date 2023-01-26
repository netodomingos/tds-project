import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/home/home'
import City from '../pages/city/city'

const Routes = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/:city',
      element: <City/>
    }
])

export default Routes