import React, { Component } from "react";
import "./Home.css";
import HomeVideo from './HomePage.mp4';
import Navbar from "../Navbar/Navbar";
import animated from 'animate.css';
import WOW from 'wowjs';


export default class Home extends Component {

    componentDidMount() {
        new WOW.WOW().init();
    }

    render () {
        return (
            <div className='home_body'> 
              <div className='home_nav'> <Navbar /></div>
              <div>
              {
              <video className="home_video" autoPlay loop muted>
                <source src={HomeVideo} type="video/mp4" />
              </video>
            }
              </div>
              <div><span className='home_text'>PEACOCK POTTERY</span></div>
              <div className='home_subtext1 wow lightSpeedIn' data-wow-duration="6s" data-wow-delay="3s" id='test'>pottery hand-made with</div>
              <div className='home_subtext2 fade animated lightSpeedIn' id='test2'>real horse hair and peacock feathers</div>
            </div>
          );
      
    }
  }



