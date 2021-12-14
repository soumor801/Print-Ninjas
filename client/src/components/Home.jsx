import Nav from "./Nav";
import Layout from './Layout'
import FeaturedProduct from "./FeaturedProduct";
import HomeCSS from './components css/Home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <Layout>
    <div className='splash-page'>
        {/* <img className='splash-photo' src='https://i.imgur.com/6WoT0mY.jpg'/> */}
        <div className='hero-image'>
          </div>
        <h1 className='hero-text'>Digital & Physical Anime Prints</h1>
        <Link to="/prints" className='hero-text'>Find your print</Link>
      </div>
      <div className='featured-block'>
        <FeaturedProduct />
      </div>
      <div className='join-block'>
        <div className='join-text-block'>
          <h4>Join Us <span className="color-outdoors">Outdoors</span></h4>
          <p>Shopping at EverFree Outdoors means you’re part of a community. Get unplugged, get free, and get outside with us (and find great deals along the way).</p>
          <Link className="join-button" to="/sign-up">
            join us
          </Link>
        </div>
        <div className='join-image-block'>
          <img src="https://i.imgur.com/OCl0sNu.jpg" alt="hikers"></img>
        </div>
      </div>
      <div className='quote-block'>
        <h2>Not all who <span className="color-wander">wander</span> are lost.</h2>
        <p>If it wasn’t for hiking, I would not have discovered the trails, soaring trees, chirping birds and rolling dunes in multiple parts of the world.  Pashmina, 2021</p>
      </div>
      <div className='action-block'>
        <div className="shop-now">
          <img src="https://i.imgur.com/adQyRvl.jpg" alt="backpack"></img>
          <h4>Shop Now</h4>
          <p>Take in the experience of the outdoors. Browse through our catalog of hundreds of products and find what you need to get outside and get free.</p>
          <Link to ="/products">shop now</Link>
        </div>
        </div>
      </Layout>
  )
}
export default Home;