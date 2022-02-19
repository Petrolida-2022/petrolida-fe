import React from 'react'
import logo from "../assets/img/business-case/Logo-Petrolida-2022.svg" 
import bi_line from "../assets/img/business-case/bi_line.svg"
import ig from "../assets/img/business-case/ant-design_instagram-filled.svg"
import linkedin from "../assets/img/business-case/bx_bxl-linkedin.svg" 

const Footer = () => {
  return (
    <div>
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

export default Footer