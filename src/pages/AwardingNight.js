import React from 'react'
import '../assets/css/style.css'
import logo from "../assets/img/business-case/Logo-Petrolida-2022.svg" 
import bi_line from "../assets/img/business-case/bi_line.svg"
import ig from "../assets/img/business-case/ant-design_instagram-filled.svg"
import linkedin from "../assets/img/business-case/bx_bxl-linkedin.svg" 
import Navbar from '../components/Navbar'
import { useTitle } from 'react-use'

const AwardingNight = () => {
  useTitle('Awarding Night | Petrolida')
  return (
    <div className='body' style={{position: 'relative'}}>
      <Navbar/>

      <section className="heroawarding hero">
        <div className="container">
          <div className="hero-title">
            <h1 className="">Awarding Night</h1>
            <p className="hero-desc body2 cc68">Each Petrolida’s competition will come to an end. After a long journey, there will come the awaited Awarding Night of Petrolida 2022 to honor the survival. For a merrier night, competitors will celebrate altogether accompanied by the performances from ITS’ best talent.</p>
          </div> 
        </div>
        <div className="container timer">
          <div className="information">
            <p>open registration</p>
            <div className="timer-container d-flex align-items-baseline">
              <div className="col-3 days">
                <span id="days-number" className="d-block text-center">00</span>
                <span className="d-block text-center timer-name">DAYS</span>
              </div>
              <span className="d-block text-center timer-separator">:</span>
              <div className="col-3  hours">
                <span id="hours-number" className="d-block text-center">00</span>
                <span className="d-block text-center timer-name">HOURS</span>
              </div>
              <span className="d-block text-center timer-separator">:</span>
              <div className="col-3  mins">
                <span id="mins-number" className="d-block text-center">00</span>
                <span className="d-block text-center timer-name">MINUTES</span>
              </div>
              <span className="d-block text-center timer-separator">:</span>
              <div className="col-3  secs">
                <span id="secs-number" className="d-block text-center">00</span>
                <span className="d-block text-center timer-name">SECONDS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="regist-anounce text-center">
        <h3 className="cc87">Don’t Forget to Register!</h3>
        <p className="cc68">Don’t miss the ultimate opportunity to showcase your ideas and innovation in reinforcing the a future of our energy industry</p>
        <button className="buttonrgster" data-bs-toggle="modal" data-bs-target="#feedbackModal">
          <span className=" align-items-center">
              <span >Register</span>
          </span>
        </button>
      </section>

      <section className="footer">
        <div className="container">
            <div className="logo col-sm-4">
              <img src={logo}alt="logo petrolida"/>
              <div className="info cc68">
                  <p>Presented by Society of Petroleum Engineers Sepuluh Nopember Institute of Technology</p>
              </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-4 col-lg-4 contact">
              <div className="headingtitle"><p>Contact</p></div>
              <div className="information">
                <p>Mail Us: petrolida@its.ac.id</p>
                <p>Call Us: +1800 000 0001</p>
              </div>
            </div>
            <div className="col-sm-4 col-lg-4 visit-us">
                <div className="headingtitle"><p>Visit Us</p></div>
                <div className="information">
                  <p>60111 Jawa Timur Surabaya Jl. Teknik Kimia</p>
                  <p>Keputih, Sukolilo</p>
                </div>
            </div>
            <div className="col-sm-4 col-lg-4 media">
                <div className="headingtitle"><p>Media</p></div>
                <div className="information">
                    <p>Mail Us: petrolida@its.ac.id</p>
                    <p>Adverise: advertisepetrolida@its.ac.id</p>
                </div>
            </div>
          </div>
          <hr/>
        </div>
      </section>

      <section className="sosmed-info">
        <div className="text-center">
          <a href="#!">
            <img src={bi_line} alt="Line"/>
          </a>
          <a href="#!">
            <img src={ig} alt="Instagram"/>
          </a>
          <a href="#!">
            <img src={linkedin} alt="Linkedin"/>
          </a>
        </div>
        <div className="copyright ">
            <p>Copyright © Web Developer Team Petrolida 2022</p>
        </div>
      </section>
    </div>
  )
}

export default AwardingNight