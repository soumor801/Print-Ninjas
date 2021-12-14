import { Link, NavLink, useLocation } from 'react-router-dom'
import NavCSS from './components css/Nav.css'
function Nav() {
  const authenticatedOptions = (
    <>
        <NavLink className="link" to="/sign-out">SIGN OUT</NavLink>
    </>
  )
  const unauthenticatedOptions = (
    <>
        <NavLink className="nav-links" to="/sign-up">SIGN UP</NavLink>
        <NavLink className="nav-links" to="/sign-in">SIGN IN</NavLink>
    </>
  )
  return (
    <div >
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' classname='nav-logo'><img className='nav-logo' src='https://i.imgur.com/oQZa4K9.png' /></Link>
          <div className='nav-links'>
        <Link to='/prints'><div className='nav-links'>PRINTS</div></Link>
        <Link to='/about-us'><div className='nav-links'>ABOUT US</div></Link>
            <Link to='/about-us'><div className='nav-links'>{unauthenticatedOptions}</div></Link>
        </div>
        </div>
        
      </nav>
    </div>
  )
}

export default Nav;