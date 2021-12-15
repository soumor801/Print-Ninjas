import { Link, NavLink, useLocation, useNavigate} from 'react-router-dom'
import NavCSS from './components css/Nav.css'
const  Nav = (props) => {
  let { user, handleLogout } = props
  let navigate = useNavigate()
  const authenticatedOptions = (
    <>
        <Link className="nav-links" to="/" onClick={() => handleLogout()}>SIGN OUT</Link>
    </>
  )
  const unauthenticatedOptions = (
    <>
        <Link className="nav-links" to="/sign-up"><div className='nav-links'>SIGN UP</div></Link>
        <Link className="nav-links" to="/sign-in"><div className='nav-links'>SIGN IN</div></Link>
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
        
           {/* {alwaysOptions} */}
        {user ? authenticatedOptions : unauthenticatedOptions}
        {user && <div className="link-welcome">Welcome, {user.email}</div>}
         
        </div>
        </div>
        
      </nav>
    </div>
  )
}

export default Nav;