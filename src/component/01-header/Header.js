import React from 'react'
import './header.css'
import  mainImg from "../../images/hero.png"
// import link from 'react-router-dom'
import { Router, Route, Link, BrowserRouter, link } from 'react-router-dom';

const Header = () => {
 
  
  return (
    <>
    <div className='header'>
      <nav className='nav'>
        <div className='container navbar'>
            <div className='logo d-flex'>
              <span className='material-icons me-2'>restaurant</span>
              <h1 ><a href="#home">Tifa</a></h1>
            </div>
          <input type='checkbox' id='check' className='d-none'></input>
            <label for='check'>
              <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            </label>
                  <div className='links'>
                  <ul>
                       <li><Link className="home" href="/"><span data-hover="home">home</span></Link></li>
                      <li><Link to="/About Us"><span data-hover="About Us">About Us</span></Link>
                      </li>
                      <li><Link to="/Services"><span data-hover="Services">Services</span></Link></li>
                      <li><Link to="/menu"><span data-hover="Menu">Menu</span></Link></li>
                      <li><Link to="/pages"><span data-hover="pages">pages</span></Link></li>
                      <li><Link to="/contact"><span data-hover="Contact">Contact</span></Link></li>
                    <li><Link to='/Book' > <button className='btnn' style={{width:"190px",height:"50px"}}>Book A Table</button></Link></li>
                  </ul>
              </div>
              {/* </Route> */}
            {/* </Router> */}
            {/* </BrowserRouter> */}
          </div>
      </nav>


<div className='content'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-6 col-md-12 '>
        <div className='content-detail'>
          <h1 className='text-white'>Enjoy Our
              Delicious Meal</h1>
              <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                 Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit
                , sed stet lorem sit clita duo justo magna dolore erat amet</p>
        </div>
        <button className='btnn'>Visit Us</button>
      </div>
      <div className='col-lg-6 col-md-12 '>
        <img src={mainImg} alt='img'></img>
      </div>
    </div>
  </div>
</div>

    </div>

    </>

  )

}

export default Header