import Nav from "./Nav";
import { Link } from 'react-router-dom'
import LayoutCSS from './components css/Layout.css'
function Layout(props) {
  return (
    <div className='layout-wrapper'>
      <Nav />
      <div className="layout-children">
            {props.children}</div>
      <footer>
        <div className='footer-links'>
        <Link to='/prints'>Shop</Link>
        <Link to='/about'>About</Link>
        <Link to='/create-print'>Add a Print</Link>
        <Link to='/sign-up'>Sign-Up</Link>
        </div>
        <Link to='/'><img className='footer-logo' src='https://i.imgur.com/2p10WOz.png'/></Link>
      </footer>
    </div>
  )
}
export default Layout;