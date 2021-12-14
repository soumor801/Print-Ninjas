import Layout from "./Layout";
import AboutCSS from '../components/components css/About.css'

function About() {
  return (
    <Layout>
    <div className='about-wrapper'>
        <h1>About Us</h1>
        <h2>Print Ninjas</h2>
              <p className="profile-text"> Print Ninjas is a digital & physical print ecommerce website that allows user to create, view, and edit all your favorite anime characters, all in one place.</p>
        
        <div className="ej">
              <div className="letter-image-block">
                <img src="https://i.imgur.com/hoPFt6I.jpg" alt ="ej headshot"></img>
              </div>
              <div className="profile-text">
                <h4>Elhadj Soumahoro</h4>
                <p>A born and raised New Yorker with passion for problem solving. EJ translates his strong values in dedication, adaptability and resilience to his software engineer/developer role, making him uniquely stand out from other developers.</p>
                <div className="daale-links">
                  <a href="https://www.linkedin.com/in/elhadj-soumahoro-0b1aa3198/" target="_blank" rel="noreferrer" ><img src="https://i.imgur.com/GLGB8SJ.png" alt="linkedin icon"></img></a>
                  <a href="https://github.com/soumor801" target="_blank" rel="noreferrer" ><img src="https://i.imgur.com/zljymLZ.png" alt="github icon"></img></a>
              </div>
              </div>
              </div>
      </div>
      </Layout>
  )
}
export default About;