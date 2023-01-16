import { Link } from 'react-router-dom'
import './Navbar.scss'


const Navbar = () => {
  return (
    <nav>
        <span><Link to='/' className='logo'>Booking.com</Link></span>

        <div className='nav__btn'>
            <button className='nav__btn--login'>login</button>
            <button className='nav__btn--register'>register</button>
        </div>
    </nav>
  )
}

export default Navbar

