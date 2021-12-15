import { Link, NavLink, useLocation } from 'react-router-dom'
import NavCSS from './components css/Nav.css'
const  Nav = (props) => {
  let { user, handleLogout } = props
  const authenticatedOptions = (
    <>
        <NavLink className="link" to="/sign-out" onClick={() => handleLogout()}>SIGN OUT</NavLink>
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
        <div className='links'>
           {/* {alwaysOptions} */}
        {user ? authenticatedOptions : unauthenticatedOptions}
        {user && <div className="link-welcome">Welcome, {user.email}</div>}
          </div>
        </div>
        </div>
        
      </nav>
    </div>
  )
}

export default Nav;