import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import AboutVideo from './HowTo2.mp4';
import Typist from "react-typist";
import ghost from '../../ghost';


export default function About(props) {

    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66: 'b'
      };
      
      var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
      var konamiCodePosition = 0;
console.log('keysss')
      document.addEventListener('keydown', function(e) {
        var key = allowedKeys[e.keyCode];
        var requiredKey = konamiCode[konamiCodePosition];
      console.log('type key', key);
        if (key == requiredKey) {
          konamiCodePosition++;
          if (konamiCodePosition == konamiCode.length)
            activateCheats();
        } else
          konamiCodePosition = 0;
      });
      
      function activateCheats() {
        //document.body.style.backgroundImage = "url('assets/img/bg/rick.gif')";
        document.body.style.backgroundColor ='red';
        console.log('hey man')
        // document.getElementById('rick').src="assets/img/bg/rick.gif";
        // var audio = new Audio('assets/img/bg/rick.mp3');
        // audio.play();
      }


  return (
    <div className='about_body'>
              <div className='about_nav'> <Navbar /></div>
      {
        <video className="videoTag" autoPlay loop muted>
          <source src={AboutVideo} type="video/mp4" />
        </video>
      }

    <div className='text_container'>
    <span>Inside the Studio:</span>
          <Typist className="typewriter">
          <Typist.Delay ms={500} />
          <span>Wanna see how it's done?</span>
          <Typist.Backspace count={24} delay={1500} />
          <span id='make_a_pot'> Step 1 - make a pot </span>
          <Typist.Backspace count={20} delay={3400} />
          <span id='wilderness'> preferably in the wilderness </span>
          <Typist.Backspace count={30} delay={4800} />
          <span id='kiln'> Step 2 - fire it in the kiln </span>
          <Typist.Backspace count={30} delay={2100} />
          <span id='glaze'> Step 3 - glaze it and fire it again </span>
          <Typist.Backspace count={36} delay={2000} />
          <span id='horsehair'> Step 4 - apply horse hair </span>
          <Typist.Backspace count={18} delay={4000} />
          <span id='peacock'>  or peacock feathers </span>
          <Typist.Backspace count={30} delay={4000} />
          <span></span>
        </Typist>
    </div> 
    </div>
  );
}
