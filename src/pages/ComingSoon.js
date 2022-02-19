import React, { useState } from 'react';
import comingSoonImg from '../assets/img/coming-soon/comingsoon-image.png'
import { countdown } from '../utils/countdown';

const ComingSoon = () => {
  const timer = countdown()
  const [countDown, setCountDown] = useState({
    days: timer.days,
    hours: timer.hours,
    minutes: timer.minutes,
    seconds: timer.seconds
  })
  setInterval(() => {
    const timer = countdown()
    setCountDown({
      days: timer.days,
      hours: timer.hours,
      minutes: timer.minutes,
      seconds: timer.seconds
    })
  }, 1000);

  return (
    <section id="comingsoon" className="d-flex flex-column align-items-center justify-content-md-center">
      <div className="ps-5 container">
        <h2 className="comingsoon-title">Petrolida 2022 will be land</h2>
        <p className="comingsoon-desc">Don’t miss the ultimate opportunity to showcase your ideas and innovation in
          reinforcing the a future of our
          energy industry</p>
        <div className="timer-container d-flex align-items-baseline">
          <div className="me-3 me-md-4 days">
            <span id="days-number" className="d-block text-center">{countDown.days}</span>
            <span className="d-block text-center timer-name">Days</span>
          </div>
          <span className="d-block text-center timer-separator">:</span>
          <div className="mx-3 mx-md-4 hours">
            <span id="hours-number" className="d-block text-center">{countDown.hours}</span>
            <span className="d-block text-center timer-name">Hours</span>
          </div>
          <span className="d-block text-center timer-separator">:</span>
          <div className="mx-3 mx-md-4 mins">
            <span id="mins-number" className="d-block text-center">{countDown.minutes}</span>
            <span className="d-block text-center timer-name">Minutes</span>
          </div>
          <span className="d-block text-center timer-separator">:</span>
          <div className="ms-3 ms-md-4 secs">
            <span id="secs-number" className="d-block text-center">{countDown.seconds}</span>
            <span className="d-block text-center timer-name">Seconds</span>
          </div>
        </div>
      </div>
      <img src={comingSoonImg} alt="Coming Soon" className="comingsoon-image"/>
    </section>
  )
};

export default ComingSoon;
