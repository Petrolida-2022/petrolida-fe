import React from 'react'
import '../assets/css/style.css'
import emojioneImg from "../assets/img/business-case/emojione-monotone_trophy.svg"
import foldImg from "../assets/img/business-case/fold.svg"
import mailImg from "../assets/img/business-case/mail.svg"
import anounceImg from "../assets/img/business-case/anounce.svg"
import wrImg from "../assets/img/business-case/wr1.png"
import tmImg from "../assets/img/business-case/technicalmeeting.svg"
import documentImg from "../assets/img/business-case/anounce.svg"
import finalImg from"../assets/img/business-case/final.svg"
import goldImg from "../assets/img/business-case/Gold.svg"
import silverImg from "../assets/img/business-case/Silver.svg"
import bronzeImg from "../assets/img/business-case/Bronze.svg"
import accordionImg from "../assets/img/business-case/accordion.svg"
import logo from "../assets/img/business-case/Logo-Petrolida-2022.svg" 
import bi_line from "../assets/img/business-case/bi_line.svg"
import ig from "../assets/img/business-case/ant-design_instagram-filled.svg"
import linkedin from "../assets/img/business-case/bx_bxl-linkedin.svg" 
import Navbar from '../components/Navbar'
import { useTitle } from 'react-use'
import AOS from 'aos'
import 'aos/dist/aos.css'

const BusinessCase = () => {
  AOS.init()
  useTitle('Business Case Competition | Petrolida')
  return (
    <div className='body' style={{position: 'relative'}}>
      <Navbar/>

      <section className="herobisniscase hero">
        <div className="container">
          <div className="hero-title">
            <h1 className="">Business Case</h1>
            <p className="hero-desc body2 cc68">Reinforcing artificial intelligence and machine learning in the logistic industry. Find a solution to a problem real business case paint point.</p>
          </div>
          <div className="row competition-status cc87">
            <div className="col-7">
              <p className="cc87">Competition Status</p>
              <p className="body5 cc87 status-desc"><span className="dot"></span>   Active</p>
            </div>
            <div className="col-5">
              <p className="cc87">Prize Pool</p>
              <p className="body5 cc87"><img src={emojioneImg} alt="Thropy"/>   IDR 15,000,000</p>
            </div>
          </div>
          <div className="row button-info">
            <div className="col-6">
              <button className="button" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                <span className=" align-items-center">
                    <span className=" align-items-center">Guide Book</span>
                </span>
              </button>
            </div>
            <div className="col-6">
              <button className="buttonrgster" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                <span className=" align-items-center">
                    <span className=" align-items-center">Register</span>
                </span>
              </button>
            </div>
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

      <section className="row about" data-aos="fade-up">
        <h3 className="cc87">Know About Competition</h3>
        <p className="cc68">Business Case Competition is an international competition that primarily focuses on solving real business case paint points that happened in the world. With some advantages for your company such as brand awareness and publication especially in the logistic area, <br/><br/>we hope that our collaboration in structuring the “case” can engage and inspire youth that has an interest in Business Case Competition.</p>
      </section>

      <section className="tl" data-aos="fade-up">
        <div className="container stage text-center">
          <h3> Competition Stage</h3>
          <p className="text-center">This competition will be divided into three stages: Online Preliminary, Semifinal Round, and Final Round</p>
        </div>
        <div className="timeline container">
          <div className="vlbusinesscase"></div>
          <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-end padding-top-2x padding-bottom-1x">
            <div className="step completed">
              <div className="step-icon-wrap">
                <div className="step-icon"><img src={foldImg} alt="folder"/></div>
              </div>
              <div className="information">
                <p className="body4 cc68 " style={{fontWeight: "normal"}}>February 27th - March 26th 2022</p>
                <p className="body4 cc87" style={{fontWeight: '500px'}}>Open Registration</p>
              </div>
            </div>
            <div className="step">
              <div className="step-icon-wrap">
                <div className="step-icon "><img src={mailImg} alt="mail"/></div>
              </div>
              <div className="information">
                <p className="body4 cc68" style={{fontWeight: 'normal'}}>March 1st - March 26th 2022</p>
                <p className="body4 cc87" style={{fontWeight: "500px"}}>Preliminary Round
                  Submission</p>
              </div>
            </div>
            <div className="step">
              <div className="step-icon-wrap">
                <div className="step-icon "><img src={anounceImg} alt="anounce"/></div>
              </div>
              <div className="information">
                <p className="body4 cc68" style={{fontWeight: 'normal'}}>April 6th 2022</p>
                <p className="body4 cc87" style={{fontWeight: '500px'}}>Semi Finalist 
                  Announcement</p>
              </div>
            </div>
            <div className="wraperright "><img src={wrImg} alt='wrap'/></div>
          </div>
          <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-end padding-bottom-1x">
            <div className="wraperleft "><img src={wrImg} alt='wrap'/></div>
            <div className="step olast">
              <div className="step-icon-wrap ">
                <div className="step-icon olast"><img src={tmImg} alt="final"/></div>
              </div>
              <div className="information">
                <p className="body4 cc68" style={{fontWeight: 'normal'}}>May 14th 2022</p>
                <p className="body4 cc87" style={{fontWeight: '500px'}}>Technical Meeting</p>
              </div>
            </div>
            <div className="step">
              <div className="step-icon-wrap">
                <div className="step-icon"><img src={anounceImg} alt="final"/></div>
              </div>
              <div className="information">
                <p className="body4 cc68" style={{fontWeight: 'normal'}}>May 8th 2022</p>
                <p className="body4 cc87" style={{fontWeight: '500px'}}>Finalist Announcement</p>
              </div>
            </div>
            <div className="step ofirst">
              <div className="step-icon-wrap ">
                <div className="step-icon"><img src={documentImg} alt="technicalmeeting"/></div>
              </div>
              <div className="information">
                <p className="body4 cc68" style={{fontWeight: 'normal'}}>April 9th - April 23th 2022 </p>
                <p className="body4 cc87" style={{fontWeight: '500px'}}>Semi Final Round
                  Submission</p>
              </div>
            </div>
            <div className="wraperrightdwn"><img src={wrImg} alt='wrap'/></div>
          </div>
          <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-start padding-top-2x padding-bottom-1x">
            <div className="wraperleftdwn "><img src={wrImg} alt='wrap'/></div>
            <div className="step">
              <div className="step-icon-wrap">
                <div className="step-icon"><img src={documentImg} alt="folder"/></div>
              </div>
              <div className="information">
                <p className="body4 cc68 " style={{fontWeight: 'normal'}}>May 14th - May 20th 2022</p>
                <p className="body4 cc87" style={{fontWeight: '500px'}}>Final Round
                  Submission</p>
              </div>
            </div>
            <div className="step">
              <div className="step-icon-wrap">
                <div className="step-icon "><img src={finalImg} alt="mail"/></div>
              </div>
              <div className="information">
                <p className="body4 cc68" style={{fontWeight: 'normal'}}>May 21st 2022</p>
                <p className="body4 cc87" style={{fontWeight: '500px'}}>Final Presentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="competition-price" data-aos="fade-up">
        <div className="container-sm mx-auto">
          <div className="text-center">
            <h3 className="title cc87">Competition Price</h3>
            <p className="desc body3 cc68">Winners have a chance to win the prize pool of Rp. 15,000,000, consist of</p>
          </div>
          <div className="price-detail row ">
            <div className="col-xl-6">
              <div className="icon-box">
                <img src={goldImg} alt="testing"/>
                <div className="col">
                  <h6>1st Place</h6>
                  <p className="body2">Rp 7.000.000</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="icon-box">
                <img src={silverImg} alt="testing"/>
                <div className="col">
                  <h6>2nd Place</h6>
                  <p className="body2">Rp 5.000.000</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="icon-box">
                <img src={bronzeImg} alt="testing"/>
                <div className="col">
                  <h6>3rd Place</h6>
                  <p className="body2">Rp 3.000.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container-xl">
          <p className="faq-header">FAQ</p>
          <div className="row">
            <div className="detail col-sm-5 col-lg-5">
              <h6 className="cc87">Frequently Asked Questions</h6>
              <p className="cc68">Still have any questions? Don’t hesitate to 
                reach us</p>
              <button className="button" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                <span className=" align-items-center">
                    <span><div className="body2">Contact Us</div></span>
                </span>
              </button>
            </div>
            <div className="col-sm-7 col-lg-7" >
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h6 className="accordion-header">
                    <button className="accordion-button collapsed" aria-expanded="true" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                      What is the theme of this competition?
                      <span><img src={accordionImg} alt='wrap'/></span>
                    </button>
                  </h6>
                  <div id="faq-content-1" className="accordion-collapse collapse show" data-bs-parent="#faqlist1">
                    <div className="accordion-body">
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </div>
                  </div>
                  <hr/>
                </div>
                <div className="accordion-item">
                  <h6 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                      Can I join as an individually?
                      <span><img src={accordionImg} alt='wrap'/></span>
                    </button>
                  </h6>
                  <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                    <div className="accordion-body">
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </div>
                  </div>
                  <hr/>
                </div>
                <div className="accordion-item">
                  <h6 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                      Can a team member consist of different universities and majors?
                      <span><img src={accordionImg} alt='wrap'/></span>
                    </button>
                  </h6>
                  <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                    <div className="accordion-body">
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                    </div>
                  </div>
                  <hr/>
                </div>
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

export default BusinessCase