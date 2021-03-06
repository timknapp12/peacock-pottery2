import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import hamburger from "./hamburger.png";

export default function Navbar() {

    return (
      <div className="navbar_container">
        <nav>
          <div className="navbar">
            <ul className="">
              <Link to="/home">
                <button className="nav_buttons" id="menu_links">
                  Home
                </button>
              </Link>
              <Link to="/about">
                <button className="nav_buttons" id="menu_links">
                  About
                </button>
              </Link>
              <Link to="/shop">
                <button className="nav_buttons" id="menu_links">
                  Shop
                </button>
              </Link>
              <Link to="/cart">
                <button className="nav_buttons" id="menu_links">
                  Cart
                </button>
              </Link>
            </ul>
            

            <div class="dropdown">
            <div><img className="hamburger dropbtn" src={hamburger} /></div>
          <div class="dropdown-content">
            <Link to="/home"><span id='menu1'>Home</span></Link>
            <Link to="/about"><span id='menu2'>About</span></Link>
            <Link to="/shop"><span id='menu3'>Shop</span></Link>
            <Link to="/cart"><span id='menu4'>Cart</span></Link>
            {/* <a href="#">Link 2</a>
            <a href="#">Link 3</a> */}
          </div>
        </div>


            <ul>
              <a className="signout_button" href="/auth/logout">
                <button className="nav_buttons">SignOut</button>
              </a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

