import React from 'react'
import './Services.css'
import  Img1 from "../../images/about-1.jpg"
import  Img2 from "../../images/about-2.jpg"
import  Img3 from "../../images/about-3.jpg"
import  Img4 from "../../images/about-4.jpg"
// import {FontAwesomeIcon} from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Services = () => {
  return (
    <div className='Services'>
        <div className='container'>

          <div className='row'>
            <div className='col-md-6 col-lg-3 col-sm-12 col-xs-12'>
              <div className='box'>
              <i class="material-icons">person_outline_tie</i>
                  <h4> Master Chefs </h4>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12 col-xs-12'>
              <div className='box'>
                 <i className='material-icons'>restaurant</i>              
                  <h4> Quality Food </h4>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12 col-xs-12'>
              <div className='box'>
              <i class="material-icons">shopping_cart</i>
                  <h4> Online Order </h4>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12 col-xs-12'>
              <div className='box'>
              <i class="material-icons">headset</i>
             
                  <h4> 24/7 Service </h4>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>


          <div className='row box-Detail'>

              <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 '>
                  <div className='row box-imgs '>
                    <div className='col-6'>
                      <img src={Img1} className='img1' alt=''></img>
                    </div>
                    <div className='col-6'>
                      <img src={Img2} className='img2' alt=''></img>
                    </div>
                  </div>
                  <div className='row box-imgs'>
                    <div className='col-6'>
                      <img src={Img4} className='img3' alt=''></img>
                    </div>
                    <div className='col-6'>
                      <img src={Img3} className='img4' alt=''></img>
                    </div>
                  </div>
              </div>
              
              <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 '>
                <div className='about-us'>
                 <div className='line'>
                    <h4>about us</h4>
                    <span></span>
                 </div>
                 <div className='Rest'><p>Welcome to <span>Tifa</span> Restoran</p>
                </div>
                <div className='pragraph'>
                  <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                  <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                </div>
                <div className='details'>
                   <div className='row'>
                      <div className='col'>
                        <div className='trx'>
                          <h1>15</h1>
                          <div style={{display:"flex",flexDirection:"column"}}>
                            <span>Years of</span>
                            <p>Exprience</p>
                          </div>
                        </div>
                     </div>
                    <div className='col'>
                    <div className='trx'>
                          <h1>50</h1>
                          <div style={{display:"flex",flexDirection:"column"}}>
                            <span>Popular</span>
                            <p>MASTER CHEFS</p>
                          </div>
                     </div>
                    </div>
                   </div>
                   <button className='btnn'>Read More...</button>
                </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Services