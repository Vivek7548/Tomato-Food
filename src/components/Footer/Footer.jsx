import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const footer = () => {
  return (
    <div className='footer' id='footer' >
        <div className="footer-content">
            <div className='footer-content-left'>
                <img src={assets.logo} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam illo quasi eum, ipsum voluptates dolor repellendus perferendis, repellat fugiat architecto repudiandae, alias reiciendis enim harum quaerat saepe at. Adipisci.    </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About-us</li>
                    <li>Delivery</li>
                    <li>Privacy-policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>Get in Touch</h2>
                <ul>
                    <li>+913764747478</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>

      <hr />
      <p className="footer-copy-right">copy right 2024</p>
    </div>
  )
}

export default footer
