import React, { useState } from 'react'
import '../assets/css/main.scss'
import 'animate.css'

import logo from '../assets/img/home/logo-petrolida-desktop.svg'
import hamb from "../assets/img/home/hamb-nav.svg"
import exit from "../assets/img/home/exit-nav.svg"

import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false)
  const [navbarImg, setNavbarImg] = useState(true)

  const handleResponsive = () => {
    setToggleNavbar(!toggleNavbar)
    setNavbarImg(!navbarImg)
  }

  return (
    <nav>
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" id="logo-petrolida">
          <img src={logo} className="logo" alt="Logo Petrolida" />
        </Link>
        <ul className={`d-flex animate__animated ${toggleNavbar && 'responsive animate__slideInLeft'}`} id="list-link-nav">
          <li><Link to="/about">About</Link></li>
          <li>
            <Link to="/#competitions">Events</Link>
          </li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/users/sign_in" className="sign-in">Sign in</Link></li>
        </ul>
        <button className="d-block d-md-none btn shadow-none" id="btn-nav" onClick={handleResponsive}><img src={navbarImg ? hamb : exit} alt="Button Navigation" id="img-btn-nav"/></button>
      </div>
    </nav>
  )
}

export default Navbar