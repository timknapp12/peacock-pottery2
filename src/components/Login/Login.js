import React, { Component } from "react";
import "./Login.css";
import LoginVideo from "./PeacockLogin1.mp4";

export default class Login extends Component {
  render() {
    return (
      <div className='login_body'>
        <div className='login_container'> 
        <div className='login_title'><h1>PEACOCK POTTERY</h1></div>
        </div>
        <div className="login">

          {
            <video className="videoTag" autoPlay loop muted>
              <source src={LoginVideo} type="video/mp4" />
            </video>
          }
                  <a href={process.env.REACT_APP_LOGIN}>
          <button type="" className="loginButton">
            Sign in
          </button>
        </a>
        </div>
      </div>
    );
  }
}
