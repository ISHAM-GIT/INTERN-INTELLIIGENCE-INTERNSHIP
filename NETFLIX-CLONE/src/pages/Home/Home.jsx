import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import hero_img from '../../assets/hero_banner.jpg'
import hero_des from '../../assets/hero_title.png'
import Play_icon from'../../assets/play_icon.png'
import info_icon from'../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
        <div className="hero">
        <img src={hero_img} alt="" className='back_img' />
        <div className="hero-des">
          <img src={hero_des} alt="" className='title-img' />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, saepe.</p>
          <div className="hero-btn">
            <button className='btn'><img src={Play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
        <div className="more-cards">
          <TitleCards title={"Blockbuster Movie"} category={"top_rated"}/>
          <TitleCards title={"only on  Netflix"} category={"popular"}/>
          <TitleCards title={"Upcoming Shows"} category={"upcoming"}/>
          <TitleCards title={" Top Pics for you"} category={"now_playing"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
