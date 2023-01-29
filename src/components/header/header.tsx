import { Container } from './styles'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Container data-testid={'HeaderTestId'}>
        <Link 
           to={{ pathname: `/`}}
        >
            <FaArrowLeft size={30} color="#FFF"  data-testid={'HeaderIconTestId'}/>
        </Link>
    </Container>
  )
}
