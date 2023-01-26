import { RouterProvider } from 'react-router-dom'
import Routes from './routes/routes'

export default function App() {
  return (
    <RouterProvider router={Routes} />
  )
}
