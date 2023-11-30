import React from 'react'
import './Registration.css'
import videoImg from '../../images/video.jpg'

const Registration = () => {
  return (
    <div className='Registration'>
    
        <div className='row'>
            <div className='col-lg-6 col-sm-12'>
                <div className='video'>
                    <img src={videoImg}></img>
                       {/* <i className='material-icons'>play_circle</i> */}
                      <button>
                      <i className='material-icons'>play_arrow</i>
                      </button>
                   
                </div>
            </div>
            <div className='col-lg-6 col-sm-12'>
                <div className='Registration-form'>
                    <div className='container'>
                        <div className='reserv'>
                            <p>Reservation</p>
                            <span></span>
                        </div>
                        <h3>Book A Table Online</h3>
                        <form>
                            <div className='form-inputs'>
                                <input type='text' placeholder='Your Name' ></input>
                                <input type='email' placeholder='Your Email' ></input>
                                <input type='date' placeholder='Your Email' value='date' ></input>

                                <select className='' > 
                                    <option selected>One</option>
                                    <option >Two</option>
                                    <option >Three</option>
                                </select>
                            </div>
                            <textarea name="message" id="" cols="30" rows="5" placeholder='special request'></textarea>
                            <button type='submit' className='btnn'>Book Now</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registration