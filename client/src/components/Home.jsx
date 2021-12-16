import Nav from "./Nav";
import Layout from './Layout'
import FeaturedProduct from "./FeaturedProduct";
import HomeCSS from './components css/Home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
    <div className='splash-page'>
        {/* <img className='splash-photo' src='https://i.imgur.com/6WoT0mY.jpg'/> */}
        <div className='hero-image'>
        <div className='splash-text'>
          <h1 className='hero-text' id='home-h1'>Digital & Physical Anime Prints</h1>
        <Link to="/prints" className='hero-text'>Find your print</Link>
          </div>
        </div>
      </div>
      <div className='featured-block'>
        <FeaturedProduct />
      </div>
      <div className='join-block'>
        <div className='join-text-block'>
          <h4>Become a  <span className="color-outdoors">Ninja!</span></h4>
          <p>Shopping at Print Ninjas means you’re part of a community. A variety digital and physical prints, of all your favorite animes characters (and find great deals along the way)..</p>
          <Link className="join-button" to="/sign-up">
            Join Now!
          </Link>
        </div>
        <div className='join-image-block'>
          <img src="https://i.imgur.com/OCl0sNu.jpg" alt="hikers"></img>
        </div>
      </div>
      <div className='quote-block'>
        <h2>Follow Your <span className="color-wander">Ninja</span> way!</h2>
        <p>“Don’t give up, there’s no shame in falling down! True shame is to not stand up again!”
~ Shintaro Midorima (Kuroko No Basket)</p>
      </div>
      <div className='action-block'>
        <div className="shop-now">
          <img src="https://i.imgur.com/2p10WOz.png" alt="backpack"></img>
          <h4>Shop Now</h4>
          <p>  Browse through our catalog of hundreds of products and find what you need to turn your space into an anime safehaven. </p>
          <Link to ="/prints">Shop now</Link>
        </div>
        <div className="shop-now">
          <img src="https://i.imgur.com/FYBY2ca.png" alt="backpack"></img>
          <h4>Join Us</h4>
          <p>Be a part of the adventure.  Join the community and get exclusive deals and gain access to  product reviews. Contribute to Print Ninjas member experience.  </p>
          <Link to ="/sign-up">Join Us</Link>
        </div>
        <div className="shop-now">
          <img src="https://i.imgur.com/9Sveq1s.png" alt="backpack"></img>
          <h4>Learn More</h4>
          <p>We like to think we’re a pretty fun bunch! And we would love for you to join in on the fun. Learn more about our team and what we love to do.</p>
          <Link to ="/about-us">Learn More</Link>
        </div>
        </div>
        </div>
  )
}
export default Home;