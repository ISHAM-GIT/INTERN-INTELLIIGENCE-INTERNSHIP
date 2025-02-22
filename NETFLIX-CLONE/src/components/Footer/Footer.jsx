import React from 'react'
import './Footer.css'
import yt_icon from '../../assets/youtube_icon.png'
import twt_icon from '../../assets/twitter_icon.png'
import insta_icon from '../../assets/instagram_icon.png'
import fb_icon from '../../assets/facebook_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={yt_icon} alt="" />
        <img src={fb_icon} alt="" />
        <img src={insta_icon} alt="" />
        <img src={twt_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Terms of use </li>
        <li>Privacy</li>
        <li>Cookie Preference</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright'>&copy; 1997-2025 Netflix Clone By MD ISHAM.</p>
    </div>
  )
}

export default Footer
