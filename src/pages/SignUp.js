import React, { useState } from 'react'
import { useTitle } from 'react-use'
import comingSoonImg from '../assets/img/coming-soon/comingsoon-image.png'
import Navbar from '../components/Navbar'


import { register } from '../services/auth'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'

const SignUp = () => {
  useTitle('Sign Up | Petrolida')
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })


  const handleSignUp = () => {
    setLoading(true)
    register(data)
      .then(res => {
        Swal.fire(({
          icon: 'success',
          text: 'Success Register'
        }))
        navigate('/account/sign_in')
        setLoading(false)
      })
      .catch(err => {
        Swal.fire({
          icon:'error',
          text: 'Error'
        })
      })
  }

  return (
    <div className='body'>
      <Navbar/>
      <section id="loginPage" className='mt-5 mb-3'>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6 d-none d-lg-block">
              <h1 className="h2 login-title">
                Petroleum<br/>
                Integrated Days<br/>
                2022
              </h1>
              <p className="body2 login-desc">Petroleum Integrated Days (Petrolida) is the biggest annual event held by SPE ITS Student Chapter. This year's series will be the 10th annual event.</p>
            </div>
            <div className="col-xl-6 col-lg-6 text-white">
              <div className="form mx-auto">
                <h2 className="h5">Register Account!</h2>
                <p className="body3 mt-2">Getting closer to us, join now!</p>
                <div className="my-3">
                  <label for="fullname" className="form-label">Your full name</label>
                  <input type="text" className="form-input" id="fullname" name="name" onChange={e => setData({...data, name: e.target.value})} autofocus placeholder="Enter your full name"/>
                </div>
                <div className="my-3">
                  <label for="email" className="form-label">Email address</label>
                  <input type="email" className="form-input" id="email" name="email" onChange={e => setData({...data, email: e.target.value})} placeholder="Enter email address"/>
                </div>
                <div className="my-3">
                  <label for="password" className="form-label">Password</label>
                  <input type="password" className="form-input" id="password" name="password" onChange={e => setData({...data, password: e.target.value})} placeholder="Enter password"/>
                </div>
                <div className="my-3">
                  <input type="checkbox" id="confirm" className="form-checkbox d-inline-block me-2"/>
                  <label for="confirm" className="form-label">I agree to the terms & conditions</label>
                </div>
                <button type="submit" onClick={handleSignUp} className="form-button d-block ms-auto w-100">{loading ? <Spinner/> : 'Register Account'}</button>
                <p className="body2 text-center mt-4">Already have an account? <Link to="/account/sign_in">Sign in</Link></p>
              </div>
            </div>
          </div>
        </div>
        <img src={comingSoonImg} className="login-image d-none d-lg-block" alt=""/>
      </section>
    </div>
  )
}

export default SignUp