import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
  <div className='footer-container'>
      <section className="footer-subscription">
          <p className="footer-subscription-heading">
              Create an account to keep track of your quotes and receive email updates
          </p>

          <p className="footer-subscription-text">
              You can unsubscribe at any time
          </p>

          <div className="input-areas">
              <form>
                  <input type="email" name="email" placeholder='Your Email' className="footer-input"/>
                  <Button buttonStyle='btn--outline'>Subscribe</Button>
              </form>
          </div>

      </section>

      <div className="footer-links">
          <div className="footer-link-wrapper">
              <div className="footer-link-items">
                  <h2>About Us</h2>
                  <Link to="/Services">Our Services</Link>
                  <Link to="/">Testimonials</Link>
                  <Link to="/">Terms of Service</Link>
              </div>
              <div className="footer-link-items">
                  <h2>Contact Us</h2>
                  <Link to="/Contacts">Contact Info</Link>
                  <Link to="/">Email Us</Link>
                  <Link to="/Quote">Get a Quote</Link>
              </div>
          </div>

          <div className="footer-link-wrapper">
              <div className="footer-link-items">
                  <h2>Social Media</h2>
                  <Link to="/">Instagram</Link>
                  <Link to="/">Facebook</Link>
                  <Link to="/">Youtube</Link>
              </div>
          </div>

      </div>

      <section className='social-media'>
          <div className="social-media-wrap">
              <div className='footer-logo'>
                  <Link to="/" className="social-logo">Hulstein Concrete <i className="fab fa-codepen"></i></Link>
              </div>
              <small className='website-rights'>Hulstein Concrete ?? 2022</small>
              <div className='social-icons'>
                    <Link className='social-icon-link facebook' to="/" target="_blank" aria-label='Facebook'>  
                        <i className='fab fa-facebook-f'></i>   
                    </Link>
                    <Link className='social-icon-link instagram' to="/" target="_blank" aria-label='Instagram'>  
                        <i className='fab fa-instagram'></i>   
                    </Link>
                    <Link className='social-icon-link youtube' to="/" target="_blank" aria-label='Youtube'>  
                        <i className='fab fa-youtube'></i>   
                    </Link>
                    <Link className='social-icon-link twitter' to="/" target="_blank" aria-label='Twitter'>  
                        <i className='fab fa-twitter'></i>   
                    </Link>
                    <Link className='social-icon-link linkedin' to="/" target="_blank" aria-label='LinkedIn'>  
                        <i className='fab fa-linkedin'></i>   
                    </Link>
                </div> 
          </div>
      </section>

  </div>
  )
}

export default Footer;
