import { Container } from './styles'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Container>
        <Link 
           to={{ pathname: `/`}}
        >
            <FaArrowLeft size={30} color="#FFF"/>
        </Link>
    </Container>
  )
}
